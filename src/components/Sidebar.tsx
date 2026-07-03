import { categories, categoryById } from '../data/categories'
import type { Location, Category } from '../types'
import SearchBar from './SearchBar'
import CategoryFilter from './CategoryFilter'

interface Props {
  isOpen: boolean
  onClose: () => void
  locations: Location[]
  allCount: number
  searchQuery: string
  onSearchChange: (value: string) => void
  activeCategories: Set<Category>
  onToggleCategory: (category: Category) => void
  onResetCategories: () => void
  activeId: string | null
  onSelectLocation: (location: Location) => void
}

export default function Sidebar({
  isOpen,
  onClose,
  locations,
  allCount,
  searchQuery,
  onSearchChange,
  activeCategories,
  onToggleCategory,
  onResetCategories,
  activeId,
  onSelectLocation,
}: Props) {
  const grouped = categories
    .map((cat) => ({
      meta: cat,
      items: locations.filter((l) => l.category === cat.id),
    }))
    .filter((g) => g.items.length > 0)

  return (
    <>
      {/* mobile scrim */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-ink/30 backdrop-blur-[2px] z-30 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside
        className={`fixed lg:static top-0 left-0 z-40 h-full w-[86vw] max-w-sm lg:w-[340px] flex-shrink-0
        bg-[#FFFBF2]/95 lg:bg-[#FFFBF2]/90 backdrop-blur-sm border-r-2 border-ink/10 shadow-card lg:shadow-none
        flex flex-col transition-transform duration-300 ease-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isOpen ? '' : 'lg:w-0 lg:opacity-0 lg:pointer-events-none lg:border-none'}
        `}
      >
        <div className="flex items-center justify-between px-5 pt-5 pb-2">
          <h2 className="font-display font-semibold text-lg text-ink">
            The Full List <span className="text-ink/40 font-body text-sm font-normal">({allCount})</span>
          </h2>
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="lg:hidden w-8 h-8 rounded-full bg-ink/5 hover:bg-ink/10 flex items-center justify-center text-ink/60"
          >
            ✕
          </button>
        </div>

        <div className="px-5 pb-3 space-y-3">
          <SearchBar value={searchQuery} onChange={onSearchChange} />
          <CategoryFilter
            activeCategories={activeCategories}
            onToggle={onToggleCategory}
            onReset={onResetCategories}
          />
        </div>

        <div className="flex-1 overflow-y-auto px-5 pb-6 space-y-6">
          {grouped.length === 0 && (
            <p className="font-display text-lg text-ink/50 text-center pt-10">
              No spots match yet… try clearing a filter 🍂
            </p>
          )}

          {grouped.map(({ meta, items }) => (
            <div key={meta.id}>
              <div className="flex items-center gap-2 mb-2 sticky top-0 bg-[#FFFBF2]/95 backdrop-blur-sm py-1 -mx-1 px-1">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0"
                  style={{ backgroundColor: meta.color }}
                >
                  {meta.emoji}
                </span>
                <h3 className="font-mono text-[11px] uppercase tracking-wider text-ink/55">
                  {meta.label}
                </h3>
              </div>
              <ul className="space-y-1.5">
                {items.map((loc) => {
                  const active = loc.id === activeId
                  const catMeta = categoryById.get(loc.category)
                  return (
                    <li key={loc.id}>
                      <button
                        onClick={() => onSelectLocation(loc)}
                        className={`w-full text-left rounded-xl px-3 py-2.5 transition-all border-2 group ${
                          active
                            ? 'bg-white shadow-sm'
                            : 'bg-white/40 border-transparent hover:bg-white/70 hover:border-ink/10'
                        }`}
                        style={active ? { borderColor: catMeta?.color } : undefined}
                      >
                        <p className="font-display font-medium text-[15px] leading-tight text-ink group-hover:text-rose-dark transition-colors">
                          {loc.name}
                        </p>
                        <p className="text-[11px] text-ink/40 mt-0.5 truncate">{loc.address}</p>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </>
  )
}
