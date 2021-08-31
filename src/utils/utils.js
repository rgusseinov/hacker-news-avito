export const TIME_INTERVAL = 60000;

export function getLocalDateFormat(time){
  if (time){
    return new Date(time * 1000).toLocaleString();
  }
  return '';
}
