import type { Location } from '../types'
import { categoryById } from '../data/categories'

interface Props {
  location: Location
}

export default function LocationPopup({ location }: Props) {
  const meta = categoryById.get(location.category)

  return (
    <div className="w-64 animate-pop-in select-none">
      <div className="relative rounded-2xl bg-[#FFFBF2] border-2 border-white shadow-card p-4 pt-5">
        {/* postmark stamp corner */}
        <div
          className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center text-lg shadow-stamp border-2 border-white rotate-6"
          style={{ background: meta?.color ?? '#C97064' }}
        >
          {meta?.emoji}
        </div>

        <p className="font-mono text-[10px] tracking-widest uppercase text-ink/50 mb-1">
          {meta?.label}
        </p>
        <h3 className="font-display text-xl font-semibold leading-snug text-ink pr-6">
          {location.name}
        </h3>
        <p className="text-xs text-ink/45 mt-0.5 mb-2">{location.address}</p>

        <div className="h-px bg-ink/10 my-2 border-t border-dashed border-ink/20" />

        <p className="font-display text-lg leading-snug text-ink/85">
          {location.description}
        </p>
      </div>
      <div className="w-4 h-4 bg-[#FFFBF2] border-r-2 border-b-2 border-white rotate-45 -mt-2 ml-6 shadow-sm" />
    </div>
  )
}
