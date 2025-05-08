const { OpenAI } = require('openai');

// Replace with your actual API key
const api = new OpenAI({
  baseURL: 'https://api.aimlapi.com/v1',
  apiKey: 'Bearer 8101d17950054587bcb2a4d1273977dc', // Replace this with your actual API key
});

const main = async () => {
  // API call to chat
  const result = await api.chat.completions.create({
    model: 'deepseek-reasoner',  // Model name for chat completion
    messages: [
      {
        role: "user",
        content: "Tell me about AI startups."  // Example user input
      }
    ],
    temperature: 0.7,
    top_p: 0.7,
    frequency_penalty: 1,
    max_output_tokens: undefined,  // You can specify a max token limit if required
    top_k: 50,
  });

  const message = result.choices[0].message.content;  // Extract the response from the API
  console.log(`Assistant: ${message}`);
};

main();  // Call the main function
