

//TODO: Implement hexToRgb
export function hexToRgb(hexString: string): { r: number, g: number, b: number } {
  if (hexString.length === 3) {
    // 3 character string
    let hr = hexString[0];
    let hg = hexString[1];
    let hb = hexString[2];
    return hexToRgb(`${hr}${hr}${hg}${hg}${hb}${hb}`);
  }
  // 6 character string
  let [ r, g, b] = [0, 2, 4]
    .map(offset => hexString.substring(offset, offset + 2))
    .map(x => parseInt(x, 16));
  return { r, g, b };
}

//TODO: Implement rgbToHex
export function rgbToHex(r: number, g: number, b: number): string {
  return [ r, g, b ]
    .map(rawNum => Math.max(0, Math.min(255, rawNum)))
    .map(cc => cc.toString(16))
    .map(x => x.length === 1 ? `0${x}` : x)
    .join('')
}

let x: string = rgbToHex(255, 0, 0);
let { r, g, b } = hexToRgb('f00');