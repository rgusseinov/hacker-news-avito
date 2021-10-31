export const TIME_INTERVAL = 60000;
export const ITEMS_LIMIT = 30;

export function getLocalDateFormat(time){
  if (time){
    return new Date(time * 1000).toLocaleString();
  }
  return '';
}

export function textParser(text){
  const parseText = new DOMParser().parseFromString(text, 'text/html');
  return parseText.body.textContent;
}
