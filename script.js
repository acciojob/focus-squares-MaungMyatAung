//your JS code here. If required.
// Get references to the squares
const squares = [
  document.getElementById("square1"),
  document.getElementById("square2"),
  document.getElementById("square3")
];

// Loop through each square
squares.forEach((square, index) => {
  // When mouse enters the square
  square.addEventListener("mouseenter", () => {
    squares.forEach((s, i) => {
      // Change others to Coffee, skip the hovered one
      if (i !== index) {
        s.style.backgroundColor = "#6F4E37"; // Coffee
      }
    });
  });

  // When mouse leaves the square
  square.addEventListener("mouseleave", () => {
    // Reset all squares to Lavender
    squares.forEach(s => {
      s.style.backgroundColor = "#E6E6FA"; // Lavender
    });
  });
});
