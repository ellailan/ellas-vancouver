import { useEffect, useMemo, useRef, useState } from 'react'
import Sidebar from './components/Sidebar'
import MapView, { type MapViewHandle } from './components/MapView'
import RandomDateButton from './components/RandomDateButton'
import LoadingScreen from './components/LoadingScreen'
import { locations } from './data/locations'
import { categories } from './data/categories'
import type { Category, Location } from './types'

const ALL_CATEGORIES = new Set(categories.map((c) => c.id))

export default function App() {
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategories, setActiveCategories] = useState<Set<Category>>(new Set(ALL_CATEGORIES))
  const [activeId, setActiveId] = useState<string | null>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  const mapRef = useRef<MapViewHandle>(null)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024
      setSidebarOpen(desktop)
      setIsDesktop(desktop)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const filteredLocations = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return locations.filter((loc) => {
      const inCategory = activeCategories.has(loc.category)
      const matchesSearch =
        q.length === 0 ||
        loc.name.toLowerCase().includes(q) ||
        loc.address.toLowerCase().includes(q) ||
        loc.description.toLowerCase().includes(q)
      return inCategory && matchesSearch
    })
  }, [searchQuery, activeCategories])

  function toggleCategory(category: Category) {
    setActiveCategories((prev) => {
      const next = new Set(prev)
      if (next.has(category)) {
        next.delete(category)
      } else {
        next.add(category)
      }
      if (next.size === 0) return new Set(ALL_CATEGORIES)
      return next
    })
  }

  function resetCategories() {
    setActiveCategories(new Set(ALL_CATEGORIES))
  }

  function selectLocation(location: Location) {
    setActiveId(location.id)
    mapRef.current?.flyToLocation(location)
  }

  function handleRandom() {
    const pool = filteredLocations.length > 0 ? filteredLocations : locations
    const pick = pool[Math.floor(Math.random() * pool.length)]
    if (pick) selectLocation(pick)
  }

  function handleShowAll() {
    setActiveId(null)
    mapRef.current?.fitAll(filteredLocations.length > 0 ? filteredLocations : locations)
  }

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col">
      {loading && <LoadingScreen />}

      {/* Desktop header - hidden on mobile */}
      <header className="hidden lg:flex relative z-20 flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 sm:px-7 py-4 bg-[#FFFBF2]/90 backdrop-blur-sm border-b-2 border-ink/10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen((s) => !s)}
            aria-label="Toggle location list"
            className="w-10 h-10 rounded-full bg-white shadow-sm border-2 border-ink/10 flex items-center justify-center text-lg hover:border-rose/50 transition-colors shrink-0"
          >
            🗺️
          </button>
          <div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-ink leading-tight -rotate-[0.5deg]">
              Places I Can&rsquo;t Wait to Take You
            </h1>
            <p className="font-display text-lg sm:text-xl text-rose-dark -mt-1">
              a very biased, very cozy tour of my Vancouver
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={handleShowAll}
            className="rounded-full bg-white text-ink/70 border-2 border-ink/10 px-4 py-2.5 text-sm font-semibold hover:border-pine/50 hover:text-pine-dark transition-colors"
          >
            ✨ Show All
          </button>
          <RandomDateButton onClick={handleRandom} />
        </div>
      </header>

      <div className="relative flex-1 flex overflow-hidden">
        {isDesktop && sidebarOpen && (
          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            locations={filteredLocations}
            allCount={locations.length}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            activeCategories={activeCategories}
            onToggleCategory={toggleCategory}
            onResetCategories={resetCategories}
            activeId={activeId}
            onSelectLocation={selectLocation}
          />
        )}

        <main className="flex-1 relative">
          <MapView
            ref={mapRef}
            locations={filteredLocations}
            activeId={activeId}
            onSelect={(id) => setActiveId(id)}
          />

          {/* Mobile-only random button in corner */}
          <div className="lg:hidden absolute bottom-6 right-6 z-10">
            <RandomDateButton onClick={handleRandom} />
          </div>
        </main>
      </div>
    </div>
  )
}
