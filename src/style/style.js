const interpolate = require('color-interpolate');

const colorScheme = [
  "#59C3C3",
  "#5773BA",
  "#F47A84",
  "#EBEBEB",
  "#FFDB4C",
];

const gradientColormap = (colors) => interpolate(colors);

const Style = {
  colorScheme,
  gradientColormap,
};

export default Style;
