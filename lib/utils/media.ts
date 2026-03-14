export function parseDuration(iso: string): number {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return 0;
  return (parseInt(m[1] || "0") * 3600) + (parseInt(m[2] || "0") * 60) + parseInt(m[3] || "0");
}

export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return h > 0 ? `${h}h ${m}m ${s}s` : `${m}m ${s}s`;
}

export function extractPlaylistId(url: string, type: "spotify" | "youtube"): string | null {
  if (type === "youtube") {
    const m = url.match(/[?&]list=([^&]+)/);
    return m ? m[1] : null;
  }
  if (type === "spotify") {
    const m = url.match(/playlist\/([a-zA-Z0-9]+)/);
    return m ? m[1] : null;
  }
  return null;
}