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
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
];

// Generate random quote
function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = quote;
}

// Generate new quote using AI
async function generateNewQuote() {
  const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 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",
    },
    body: JSON.stringify({
      prompt: "Generate an inspirational quote:",
      max_tokens: 50,
      temperature: 0.7,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }),
  });

  const data = await response.json();

  if (data.choices && data.choices.length > 0) {
    const newQuote = data.choices[0].text.trim();
    quotes.push(newQuote);
    console.log("New quote generated:", newQuote);
  }
}

// Add click event listener to the buttons
document.getElementById("generate-btn").addEventListener("click", function() {
  generateQuote();
  generateNewQuotes();
});
