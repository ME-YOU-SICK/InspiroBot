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
const shareButton = document.getElementById("share-button");
const saveButton = document.getElementById("save-button");

// Array to store favorite quotes
let favorites = [];

// Generate a random quote
function generateQuote() {
  // Generate quote logic here
  const randomQuote = getRandomQuote();
  quoteElement.textContent = randomQuote;
}

// Function to share quote on social media
function shareQuote() {
  const quote = quoteElement.textContent;
  const shareUrl = `https://example.com/share?quote=${encodeURIComponent(quote)}`;
  // Replace "example.com" with the actual domain of your website

  // Open social media share dialog
  window.open(shareUrl, "_blank");
}

// Function to save quote as favorite
function saveQuote() {
  const quote = quoteElement.textContent;
  favorites.push(quote);
  // You can choose to store favorites in local storage or send them to the server for persistence
}

// Event listeners
generateButton.addEventListener("click", generateQuote);
shareButton.addEventListener("click", shareQuote);
saveButton.addEventListener("click", saveQuote);
