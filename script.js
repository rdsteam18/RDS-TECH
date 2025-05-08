// Chat Functionality
async function sendChatMessage() {
    const message = document.getElementById('userMessage').value;

    const response = await fetch('https://api.aimlapi.com/v1/chat', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer <YOUR_API_KEY>',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'gpt-4o',  // Chat model name (can be changed)
            messages: [
                { role: 'user', content: message }
            ],
            temperature: 0.7
        })
    });

    const data = await response.json();
    document.getElementById('chatResponse').innerText = data.choices[0].message.content;
}

// Image Generation Functionality
async function generateImage() {
    const prompt = document.getElementById('imagePrompt').value;

    const response = await fetch('https://api.aimlapi.com/v1/images/generations', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer 8101d17950054587bcb2a4d1273977dc',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'dall-e-2',  // Image generation model
            width: 512,
            height: 512,
            seed: 1234,
            steps: 25
        })
    });

    const data = await response.json();
    const imageUrl = data.url;
    document.getElementById('generatedImage').src = imageUrl;
}
