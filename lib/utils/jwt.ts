export interface JWTDecoded {
  header: object;
  payload: object;
  signature: string;
  error?: string;
}

export function decodeJWT(token: string): JWTDecoded {
  try {
    const [h, p, s] = token.trim().split(".");
    if (!h || !p || !s) throw new Error("Invalid JWT structure");
    const decode = (str: string) => JSON.parse(decodeURIComponent(escape(atob(str.replace(/-/g, "+").replace(/_/g, "/")))));
    return { header: decode(h), payload: decode(p), signature: s };
  } catch (e: any) {
    return { header: {}, payload: {}, signature: "", error: e.message };
  }
}