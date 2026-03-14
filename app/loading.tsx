export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4">
      <div
        className="w-10 h-10 rounded-full border-2 border-t-accent animate-spin"
        style={{ borderColor: "#1E1B4B", borderTopColor: "#A78BFA" }}
      />
      <p className="text-sm font-mono text-light-sub dark:text-cosmos-sub">
        Loading...
      </p>
    </div>
  );
}