// hexToRgb('ff0000') => {r: 255, g: 0, b: 0}
// hexToRgb('f00') => { r: 255, g: 0, b: 0 }

// interface Output {
//   r: number,
//   g: number,
//   b: number,
// }

const hexToRgb = (hex: string): {
  r: number,
  g: number,
  b: number,
} => {
  const result = {
    r: 0,
    g: 0,
    b: 0,
  };
  if (hex.length === 3) {
    const red = parseInt(`${hex[0]}${hex[0]}`, 16);
    Object.assign(result, { r: red});
    const green = parseInt(`${hex[1]}${hex[1]}`, 16);
    Object.assign(result, { g: green });
    const blue = parseInt(`${hex[2]}${hex[2]}`, 16);
    Object.assign(result, { b: blue });
  } else if (hex.length === 6) {
    const red = parseInt(`${hex[0]}${hex[1]}`, 16);
    Object.assign(result, { r: red });
    const green = parseInt(`${hex[2]}${hex[3]}`, 16);
    Object.assign(result, { g: green });
    const blue = parseInt(`${hex[4]}${hex[5]}`, 16);
    Object.assign(result, { b: blue });
  } else {
    throw new Error('Invalid hex value entered.');
  }
  return result;
};

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
