const colors = [
  "#4798d1",
  "#428222",
];

let i = 0;

setInterval(() => {
  i = (i + 1) % colors.length;
  document.body.style.backgroundColor = colors[i];
}, 1000);
