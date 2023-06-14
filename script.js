// Get DOM elements
const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate-button");

// Array of sample quotes (replace with your own quotes)
const quotes = [
  "Quote 1",
  "Quote 2",
  "Quote 3",
  "Quote 4",
  "Quote 5"
];

// Generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

// Event listener for generate button
generateButton.addEventListener("click", generateQuote);

// Initial quote generation
generateQuote();
