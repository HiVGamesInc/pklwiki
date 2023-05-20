export const camelizeColumn = (name) => {
  return name.substring(0, 1).toLowerCase() + name.substring(1, name.length);
};
