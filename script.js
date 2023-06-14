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

// Function to generate a random quote
function generateRandomQuote() {
  // Get a random index from the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);

  // Get the quote object at the random index
  const quote = quotes[randomIndex];

  // Display the quote text
  document.getElementById("quote-text").textContent = quote.text;

  // Display the quote author
  document.getElementById("quote-author").textContent = "- " + quote.author;
}

// Event listener for the refresh button
document.getElementById("refresh-btn").addEventListener("click", generateRandomQuote);

// Generate a random quote when the page loads
generateRandomQuote();
