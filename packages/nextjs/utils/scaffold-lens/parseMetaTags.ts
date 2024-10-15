/**
 * Parses meta tags and returns an object with the specified properties
 * @param {string[]} metaTagsArray
 * @param {string[]} properties
 * @return {{}}
 */
export function parseMetaTags(metaTagsArray: string[], properties: string[]) {
  const result: { [key: string]: any } = {};

  metaTagsArray.forEach(metaTag => {
    const nameMatch = metaTag.match(/name="([^"]*)"/);
    const propertyMatch = metaTag.match(/property="([^"]*)"/);
    const contentMatch = metaTag.match(/content="([^"]*)"/);

    const key = nameMatch ? nameMatch[1] : propertyMatch ? propertyMatch[1] : null;
    const content = contentMatch ? contentMatch[1] : "";

    if (key) {
      const keyParts = key.split(":");
      const topLevelKey = keyParts.shift();

      if (topLevelKey && properties.includes(topLevelKey)) {
        if (!result[topLevelKey]) {
          result[topLevelKey] = {};
        }
        let currentLevel = result[topLevelKey];
        keyParts.forEach((part, index) => {
          if (!currentLevel[part]) {
            currentLevel[part] = index === keyParts.length - 1 ? content : {};
          } else if (typeof currentLevel[part] === "string") {
            currentLevel[part] = {
              content: currentLevel[part],
            };
            if (index === keyParts.length - 1) {
              currentLevel[part].content = content;
            }
          }
          currentLevel = currentLevel[part];
        });
      }
    }
  });

  return result;
}
