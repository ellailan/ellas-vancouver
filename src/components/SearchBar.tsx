interface Props {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative">
      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/40 text-sm">
        🔍
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search our spots…"
        className="w-full rounded-full bg-white/70 border-2 border-ink/10 focus:border-rose/60 outline-none pl-9 pr-8 py-2.5 text-sm font-body placeholder:text-ink/35 transition-colors"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/35 hover:text-rose transition-colors text-sm"
        >
          ✕
        </button>
      )}
    </div>
  )
}
