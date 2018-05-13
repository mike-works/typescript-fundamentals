//TODO: Implement hexToRgb
export const hexToRgb = (hex: string): {r: number, g: number, b: number} => {
  let result = {};
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  } 
  result.r = parseInt(hex.slice(0,2), 16);
  result.g = parseInt(hex.slice(2,4), 16);
  result.b = parseInt(hex.slice(4,6), 16);
  return result;
}; 

//TODO: Implement rgbToHex
export const rgbToHex = (r: number, g: number, b: number): string => {
  let result = '';
  result += (r.toString(16).length < 2) ? 0 + r.toString(16) : r.toString(16);
  result += (g.toString(16).length < 2) ? 0 + g.toString(16) : g.toString(16);
  result += (b.toString(16).length < 2) ? 0 + b.toString(16) : b.toString(16);
  return result;
};


