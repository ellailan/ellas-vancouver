export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-paper bg-grain gap-4">
      <div className="text-5xl animate-bounce">📍</div>
      <p className="font-hand text-2xl text-ink/70">packing our little scrapbook…</p>
      <div className="flex gap-1.5">
        <span className="w-2 h-2 rounded-full bg-rose animate-bounce [animation-delay:-0.3s]" />
        <span className="w-2 h-2 rounded-full bg-mustard animate-bounce [animation-delay:-0.15s]" />
        <span className="w-2 h-2 rounded-full bg-pine animate-bounce" />
      </div>
    </div>
  )
}
