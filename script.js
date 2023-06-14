// Array of quotes
let quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
];

// Generate new quotes using AI
async function generateNewQuotes() {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
            prompt: "Generate a short quote that is inspirational:",
            max_tokens: 50,
            temperature: 0.7,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0
        })
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
        const newQuote = data.choices[0].text.trim();
        quotes.push(newQuote);
        console.log("New quote generated:", newQuote);
    }
}

// Add click event listener to the button
document.getElementById("generate-btn").addEventListener("click", generateQuote);
