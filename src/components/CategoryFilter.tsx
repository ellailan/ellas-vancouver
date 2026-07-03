import { categories } from '../data/categories'
import type { Category } from '../types'

interface Props {
  activeCategories: Set<Category>
  onToggle: (category: Category) => void
  onReset: () => void
}

export default function CategoryFilter({ activeCategories, onToggle, onReset }: Props) {
  const allActive = activeCategories.size === categories.length

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={onReset}
        className={`px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all ${
          allActive
            ? 'bg-ink text-paper border-ink'
            : 'bg-white/60 text-ink/60 border-ink/15 hover:border-ink/30'
        }`}
      >
        All
      </button>
      {categories.map((cat) => {
        const active = activeCategories.has(cat.id)
        return (
          <button
            key={cat.id}
            onClick={() => onToggle(cat.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all flex items-center gap-1.5 ${
              active ? 'text-white shadow-sm' : 'bg-white/50 text-ink/50 border-ink/10 hover:border-ink/25'
            }`}
            style={
              active
                ? { backgroundColor: cat.color, borderColor: cat.color }
                : undefined
            }
          >
            <span>{cat.emoji}</span>
            {cat.label}
          </button>
        )
      })}
    </div>
  )
}
