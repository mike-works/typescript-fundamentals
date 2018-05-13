//TODO: Implement hexToRgb
export const hexToRgb = (hex: string): {r: number, g: number, b: number} => {
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }; 
  let r = parseInt(hex.slice(0,2), 16);
  let g = parseInt(hex.slice(2,4), 16);
  let b = parseInt(hex.slice(4,6), 16);
  return { r, g, b };
}; 

//TODO: Implement rgbToHex
export const rgbToHex = (r: number, g: number, b: number): string => {
  return [r, g, b].map((colorNum) => Math.max(0, Math.min(colorNum, 255)))
    .map((num) => (num.toString(16).length < 2) ? 0 + num.toString(16) : num.toString(16))
    .join('')
};


