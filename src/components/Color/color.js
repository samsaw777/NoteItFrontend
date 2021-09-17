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
];

const value = [500, 600, 700, 800, 900];

export const RandomColor = () => {
  const rancol = Math.floor(Math.random() * colorName.length);
  const ranval = Math.floor(Math.random() * value.length);
  const color = colorName[rancol];
  const weight = value[ranval];
  const randomcolval = { color, weight };
  return randomcolval;
};
