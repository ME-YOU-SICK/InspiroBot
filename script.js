// Get DOM elements
const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate-button");
const likeButton = document.getElementById("like-button");
const copyButton = document.getElementById("copy-button");

// Array to store liked quotes
let likedQuotes = [];

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

// Function to like a quote
function likeQuote() {
  const quote = quoteElement.textContent;
  if (!likedQuotes.includes(quote)) {
    likedQuotes.push(quote);
    likeButton.textContent = "Liked!";
    likeButton.disabled = true;
  }
}

// Function to copy URL to the page
function copyURL() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    copyButton.textContent = "Copied!";
    setTimeout(() => {
      copyButton.textContent = "Copy URL";
    }, 2000);
  });
}

// Event listeners
generateButton.addEventListener("click", generateQuote);
likeButton.addEventListener("click", likeQuote);
copyButton.addEventListener("click", copyURL);

// Initial quote generation
generateQuote();
