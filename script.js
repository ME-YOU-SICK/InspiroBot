// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson"
];

// Get DOM elements
const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate-button");
const likeButton = document.getElementById("like-button");
const copyButton = document.getElementById("copy-button");

// Array to store liked quotes
let likedQuotes = [];

// Generate a random quote
function generateQuote() {
  // Generate quote logic here
  const randomQuote = getRandomQuote();
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

