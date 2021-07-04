const colorName = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
  "orange",
  "lime",
  "emerald",
  "teal",
  "cyan",
  "sky",
];

const value = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export const RandomColor = () => {
  const rancol = Math.floor(Math.random() * colorName.length);
  const ranval = Math.floor(Math.random() * value.length);
  const color = colorName[rancol];
  const weight = value[ranval];
  const randomcolval = { color, weight };
  return randomcolval;
};
