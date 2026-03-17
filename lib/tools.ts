export interface Tool {
  slug: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}

export const tools: Tool[] = [
  // Developer
  { slug: "json-formatter", name: "JSON Formatter", description: "Prettify and format JSON with indentation", icon: "{ }", category: "Developer" },
  { slug: "json-validator", name: "JSON Validator", description: "Validate JSON syntax and structure", icon: "✓", category: "Developer" },
  { slug: "base64-encoder", name: "Base64 Encoder", description: "Encode text or data to Base64", icon: "→", category: "Developer" },
  { slug: "base64-decoder", name: "Base64 Decoder", description: "Decode Base64 back to plain text", icon: "←", category: "Developer" },
  { slug: "uuid-generator", name: "UUID Generator", description: "Generate v4 UUIDs instantly", icon: "🔑", category: "Developer" },
  { slug: "jwt-decoder", name: "JWT Decoder", description: "Decode and inspect JWT tokens", icon: "🔐", category: "Developer" },
  { slug: "regex-tester", name: "Regex Tester", description: "Test regular expressions with live matching", icon: ".*", category: "Developer" },
  // Security
  { slug: "password-generator", name: "Password Generator", description: "Generate strong passwords with entropy analysis", icon: "🛡️", category: "Security" },
  { slug: "password-entropy", name: "Password Entropy Checker", description: "Check the strength and entropy of a password", icon: "📊", category: "Security" },
  { slug: "hash-generator", name: "Hash Generator", description: "Generate SHA-1, SHA-256 and SHA-512 hashes", icon: "#", category: "Security" },
  // Web
  { slug: "html-minifier", name: "HTML Minifier", description: "Removes extra whitespace and comments. Not a replacement for build tools.", icon: "</>", category: "Web" },
  { slug: "css-minifier", name: "CSS Minifier", description: "Removes extra whitespace and comments. Not a replacement for build tools.", icon: "🎨", category: "Web" },
  { slug: "js-minifier", name: "JS Minifier", description: "Removes extra whitespace and comments. Not a replacement for build tools.", icon: "⚡", category: "Web" },
  { slug: "slug-generator", name: "Slug Generator", description: "Convert text to URL-safe slugs", icon: "🔗", category: "Web" },
  // Text
  { slug: "word-counter", name: "Word Counter", description: "Count words, characters, sentences", icon: "📝", category: "Text" },
  { slug: "text-diff", name: "Text Diff", description: "Compare two texts and highlight differences", icon: "⇄", category: "Text" },
  { slug: "case-converter", name: "Case Converter", description: "Convert text between cases", icon: "Aa", category: "Text" },
  { slug: "lorem-ipsum-generator", name: "Lorem Ipsum Generator", description: "Generate placeholder lorem ipsum text", icon: "¶", category: "Text" },
];

export const categories = ["Developer", "Security", "Web", "Text"];