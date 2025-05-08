// Chat Functionality
const { OpenAI } = require('openai');

const api = new OpenAI({
  baseURL: 'https://api.aimlapi.com/v1',
  apiKey: 'Bearer 8101d17950054587bcb2a4d1273977dc',
});

const main = async () => {
  const result = await api.chat.completions.create({
    model: 'deepseek-reasoner',
    messages: [
      {
  "role": "user",
  "content": ""
}
    ],
    temperature: 0.7,
    top_p: 0.7,
    frequency_penalty: 1,
    max_output_tokens: undefined,
    top_k: 50,
  });

  const message = result.choices[0].message.content;
  console.log(`Assistant: ${message}`);
};

main();

// Image Generation Functionality
const main = async () => {

const response = await fetch('https://api.aimlapi.com/v1/images/generations', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer 8101d17950054587bcb2a4d1273977dc',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      model: 'dall-e-2',
      width: 512,
      height: 512,
      seed: 37,
      steps: 25
  }),
}).then((res) => res.json());

console.log('Generation:', response);
};

main();

