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

// Generate random quote
function generateQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = quote;
}

// Add click event listener to the button
document.getElementById("generate-btn").addEventListener("click", generateQuote);
