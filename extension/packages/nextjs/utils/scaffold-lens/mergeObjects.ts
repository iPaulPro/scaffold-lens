type GenericObject = { [key: string]: any };

export const mergeObjects = <T extends GenericObject, U extends GenericObject>(target: T, source: U): T => {
  const newTarget = { ...target };
  Object.keys(newTarget).forEach(key => {
    if (key in source) {
      (newTarget as any)[key] = source[key];
    }
  });
  return newTarget;
};
