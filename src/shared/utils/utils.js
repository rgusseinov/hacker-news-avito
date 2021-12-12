export const getLocalDateFormat = (time) => {
  if (!time) return;
  return new Date(time * 1000).toLocaleDateString();
};
