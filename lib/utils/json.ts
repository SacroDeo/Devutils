export function formatJSON(input: string): { result: string; error: string | null } {
  try {
    const parsed = JSON.parse(input);
    return { result: JSON.stringify(parsed, null, 2), error: null };
  } catch (e: any) {
    return { result: "", error: e.message };
  }
}

export function validateJSON(input: string): { valid: boolean; error: string | null } {
  try {
    JSON.parse(input);
    return { valid: true, error: null };
  } catch (e: any) {
    return { valid: false, error: e.message };
  }
}