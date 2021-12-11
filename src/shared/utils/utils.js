export const getLocalDateFormat = (time) => {
  if (!time) return;
  return new Date(time * 1000).toLocaleDateString();
};

export const textParser = (text) => {
  const parseText = new DOMParser().parseFromString(text, 'text/html');
  return parseText.body.textContent;
};
