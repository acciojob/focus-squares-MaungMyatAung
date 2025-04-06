const squares = [
  document.getElementById("square1"),
  document.getElementById("square2"),
  document.getElementById("square3")
];

squares.forEach((square, index) => {
  square.addEventListener("mouseover", () => {
    squares.forEach((s, i) => {
      s.style.backgroundColor = (i === index) ? "#E6E6FA" : "#6F4E37";
    });
  });

  square.addEventListener("mouseout", () => {
    squares.forEach(s => {
      s.style.backgroundColor = "#E6E6FA";
    });
  });
});
