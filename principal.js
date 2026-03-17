const colors = [
  "purple",
  "gray",
  "forestgreen",
  "gray",
  "teal",
  "gray",
  "black",
  "gray",
  "blue",
  "gray",
  "pink",
  "gray",
  "orange",
  "gray",
  "magenta",
  "gray",
  "maroon",
  "gray",
];

let i = 0;

setInterval(() => {
  i = (i + 1) % colors.length;
  document.body.style.backgroundColor = colors[i];
}, 1750);
