type GenericObject = { [key: string]: any };

export const mergeObjects = <T extends GenericObject, U extends GenericObject>(target: T, source: U): T => {
  Object.keys(target).forEach(key => {
    if (key in source) {
      (target as any)[key] = source[key];
    }
  });
  return target;
};
