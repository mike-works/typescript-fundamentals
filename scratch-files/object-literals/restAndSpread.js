const data = {
  x: 34,
  y: 98,
  z: 78,
};

const { x, ...others } = data;
console.log(others);

const vals = { ...others, a: 99, b: 77 };
console.log(vals);
