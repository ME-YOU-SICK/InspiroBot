// Generate random quote
function generateQuote() {
  // Fetch quote from ChatGPT or any other API
  fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    },
    body: JSON.stringify({
      prompt: "Generate an inspirational quote:",
      max_tokens: 50,
      temperature: 0.7,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.choices && data.choices.length > 0) {
      const quote = data.choices[0].text.trim();
      document.getElementById("quote").textContent = quote;
    }
  })
  .catch(error => {
    console.log("An error occurred while fetching the quote:", error);
  });
}

// Add click event listener to the button
document.getElementById("generate-btn").addEventListener("click", generateQuote);
