
/**
 * Shorten a URL string to a given length 
 * @param originalUrl URL to shorten
 * @param length maximum allowed length
 */
export function shortUrl(originalUrl = '', length = 50) {
  let chunk_l = length / 2;
  let url = originalUrl.replace('http://', '').replace('https://', '');

  if (url.length <= length) {
    return url;
  }

  let start_chunk = shortString(url, chunk_l, false);
  let end_chunk = shortString(url, chunk_l, true);
  return `${start_chunk}..${end_chunk}`;
}

function shortString(str: string, l: number, rev: boolean) {
  let stop_chars = [' ', '/', '&'];
  let acceptable_shortness = l * 0.80; // When to start looking for stop characters
  let reverse = typeof rev !== 'undefined' ? rev : false;
  let s = reverse ? str.split('').reverse().join('') : str;
  let short_s = '';

  for (let i = 0; i < l - 1; i++) {
    short_s += s[i];
    if (i >= acceptable_shortness && stop_chars.indexOf(s[i]) >= 0) {
      break;
    }
  }
  if (reverse) {
    return short_s.split('').reverse().join('');
  }
  return short_s;
}