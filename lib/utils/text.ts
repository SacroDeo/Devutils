export function countWords(text: string) {
  const words = text.trim() ? text.trim().split(/\s+/) : [];
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  return {
    words: words.length,
    chars: text.length,
    charsNoSpace: text.replace(/\s/g, "").length,
    sentences: sentences.length,
    paragraphs: text.split(/\n\n+/).filter(p => p.trim()).length,
    readingTime: Math.ceil(words.length / 200),
  };
}

export function diffText(a: string, b: string): Array<{ type: "same" | "added" | "removed"; text: string }> {
  const aLines = a.split("\n");
  const bLines = b.split("\n");
  const result: Array<{ type: "same" | "added" | "removed"; text: string }> = [];
  const maxLen = Math.max(aLines.length, bLines.length);
  for (let i = 0; i < maxLen; i++) {
    if (i >= aLines.length) result.push({ type: "added", text: bLines[i] });
    else if (i >= bLines.length) result.push({ type: "removed", text: aLines[i] });
    else if (aLines[i] === bLines[i]) result.push({ type: "same", text: aLines[i] });
    else {
      result.push({ type: "removed", text: aLines[i] });
      result.push({ type: "added", text: bLines[i] });
    }
  }
  return result;
}

export function convertCase(text: string, mode: string): string {
  switch (mode) {
    case "upper": return text.toUpperCase();
    case "lower": return text.toLowerCase();
    case "title": return text.replace(/\b\w/g, c => c.toUpperCase());
    case "camel": return text.toLowerCase().replace(/[\s_-]+(.)/g, (_, c) => c.toUpperCase());
    case "snake": return text.toLowerCase().replace(/[\s-]+/g, "_");
    case "kebab": return text.toLowerCase().replace(/[\s_]+/g, "-");
    case "pascal": return text.replace(/(^\w|[\s_-]+\w)/g, c => c.replace(/[\s_-]/, "").toUpperCase());
    default: return text;
  }
}

const LOREM = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum".split(" ");

export function generateLorem(paragraphs: number, wordsPerParagraph: number): string {
  return Array.from({ length: paragraphs }, (_, pi) => {
    return Array.from({ length: wordsPerParagraph }, (_, wi) =>
      LOREM[(pi * wordsPerParagraph + wi) % LOREM.length]
    ).join(" ") + ".";
  }).join("\n\n");
}