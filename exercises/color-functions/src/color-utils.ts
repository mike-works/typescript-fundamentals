// hexToRgb('ff0000') => {r: 255, g: 0, b: 0}
// hexToRgb('f00') => { r: 255, g: 0, b: 0 }

interface Output {
  r: number,
  g: number,
  b: number,
}

const hexToRgb = (hex: string): Output=> {
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
  const stringified = (num: number): string => {
    return Math.max(0, Math.min(255, num)).toString(16);
  };

  const red = stringified(r).length === 1 ? `0${stringified(r)}` : stringified(r);
  const green = stringified(g).length === 1 ? `0${stringified(g)}` : stringified(g);
  const blue = stringified(b).length === 1 ? `0${stringified(b)}` : stringified(b);
  return `${red}${green}${blue}`.toLowerCase();
}

export {
  rgbToHex,
  hexToRgb,
};
