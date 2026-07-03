interface Props {
  onClick: () => void
  disabled?: boolean
}

export default function RandomDateButton({ onClick, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="group relative inline-flex items-center gap-2 rounded-full bg-rose text-white pl-4 pr-5 py-2.5
      font-semibold text-sm shadow-stamp hover:bg-rose-dark active:scale-95 transition-all
      disabled:opacity-40 disabled:pointer-events-none animate-wobble hover:animate-none"
    >
      <span className="text-base group-hover:rotate-12 transition-transform">🎲</span>
      Random Date Idea
    </button>
  )
}
