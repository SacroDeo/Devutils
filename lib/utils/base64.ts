export function encodeBase64(input: string): string {
  try { return btoa(unescape(encodeURIComponent(input))); }
  catch { return "Error: invalid input"; }
}

export function decodeBase64(input: string): string {
  try { return decodeURIComponent(escape(atob(input.trim()))); }
  catch { return "Error: invalid Base64 string"; }
}