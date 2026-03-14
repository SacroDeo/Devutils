export interface RegexResult {
  matches: string[];
  count: number;
  error: string | null;
}

export function testRegex(pattern: string, flags: string, input: string): RegexResult {
  try {
    const re = new RegExp(pattern, flags);
    const matches = input.match(re) ?? [];
    return { matches: Array.from(matches), count: matches.length, error: null };
  } catch (e: any) {
    return { matches: [], count: 0, error: e.message };
  }
}