"use server";

/**
 * Fetches meta tags from a given URL.
 * @param {string} url
 * @return {Promise<string[]>}
 */
export async function fetchMetaTags(url: string) {
  const response = await fetch(url);
  if (!response.ok || !response.body) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let content = "";
  let done = false;

  const metaTagsSet = new Set<string>();

  const metaTagRegex = /<meta[^>]*>/g;

  while (!done) {
    const { value, done: readerDone } = await reader.read();
    done = readerDone;

    if (value) {
      content += decoder.decode(value, { stream: true });

      let match;
      while ((match = metaTagRegex.exec(content)) !== null) {
        metaTagsSet.add(match[0]);
      }

      if (content.includes("</head>")) {
        break;
      }
    }
  }

  return Array.from(metaTagsSet);
}
