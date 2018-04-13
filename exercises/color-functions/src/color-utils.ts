//TODO: Implement hexToRgb
// hexToRgb('00ff00') => {r: 0, g: 255, b: 0}

const hexToRgb = (foo: string): boolean => {
  return true;
};

//TODO: Implement rgbToHex
// rgbToHex(255, 0, 0) => 'ff0000'

const rgbToHex = (r: number, g: number, b: number): string => {
  const red = r.toString(16) === '0' ? '00' : r.toString(16);
  const green = g.toString(16) === '0' ? '00' : g.toString(16);
  const blue = b.toString(16) === '0' ? '00' : b.toString(16);
  return `${red}${green}${blue}`;
}

export {
  rgbToHex,
  hexToRgb,
};
