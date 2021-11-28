export function getLocalDateFormat(time){
  if (!time) return;
  return new Date(time * 1000).toLocaleString();
}

export function textParser(text){
  const parseText = new DOMParser().parseFromString(text, 'text/html');
  return parseText.body.textContent;
}
