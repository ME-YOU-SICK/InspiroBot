// Create an array to store the quotes
let quotes = [];

// Function to fetch quotes from a text file
async function fetchQuotes() {
  try {
    const response = await fetch('path/to/quotes.txt');
    const data = await response.text();
    quotes = data.split('\n');
  } catch (error) {
    console.log('Error fetching quotes:', error);
  }
}

// Function to generate a random quote
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Fetch quotes on page load
window.addEventListener('DOMContentLoaded', fetchQuotes);

// Example usage: generate and display a random quote
const randomQuote = generateRandomQuote();
console.log(randomQuote);
