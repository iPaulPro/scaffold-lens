/**
 * Extracts URLs from a given text string.
 * @param text - The input text to search for URLs
 * @returns An array of unique URLs found in the text
 */
export function extractUrls(text: string): string[] {
  const urlRegex = new RegExp(
    `(?:(?:(?:https?|ftp):)?\\/\\/)` + // protocol
      `(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9][a-z0-9-]*[a-z0-9]|` + // domain name and extension
      `localhost|` + // localhost
      `(?:(?:[0-9]{1,3}\\.){3}[0-9]{1,3}))` + // OR ip (v4) address
      `(?::\\d+)?` + // port
      `(?:\\/[-a-z0-9\\._~%!$&'()*+,;=:@\\/]*)*` + // path
      `(?:\\?[-a-z0-9\\._~%!$&'()*+,;=:@\\/?]*)?` + // query string
      `(?:#[-a-z0-9\\._~%!$&'()*+,;=:@\\/?]*)?`, // fragment
    "gi", // global, case-insensitive
  );

  // Find all matches and filter out duplicates
  const matches = text.match(urlRegex);
  return matches ? [...new Set(matches)] : [];
}
