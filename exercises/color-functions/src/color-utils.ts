function hexComponentToDecimal(hc: string): number {
  return parseInt(hc, 16);
}
//TODO: Implement hexToRgb
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  let chLength = hex.length > 3 ? 2 : 1;
  let [hr, hg, hb] = [0, chLength, 2 * chLength].map(offset => hex.slice(offset, offset + chLength));
  if (chLength === 1) {
    hr = `${hr}${hr}`;
    hg = `${hg}${hg}`;
    hb = `${hb}${hb}`;
  }
  return {
    r: hexComponentToDecimal(hr),
    g: hexComponentToDecimal(hg),
    b: hexComponentToDecimal(hb)
  };
}

//TODO: Implement rgbToHex
export function rgbToHex(r: number, g: number, b: number): string {
  return [r, g, b]
    .map(n => Math.min(255, Math.max(0, n)))
    .map(decChannel => decChannel.toString(16))
    .map(hexCh => (hexCh.length === 1 ? `${hexCh}${hexCh}` : hexCh))
    .join('');
}
