const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

const apiKey = 'Bearer 8101d17950054587bcb2a4d1273977dc'; // अपने असली API Key से बदलना हो तो यहां करें

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await axios.post('https://api.aimlapi.com/v1/chat/completions', {
            model: 'deepseek-reasoner',
            messages: [
                { role: 'user', content: userMessage }
            ],
            temperature: 0.7,
            top_p: 0.7,
            frequency_penalty: 1,
            max_output_tokens: 4096,
            top_k: 50,
        }, {
            headers: {
                'Authorization': apiKey
            }
        });

        const assistantMessage = response.data.choices[0].message.content;
        res.json({ message: assistantMessage });
    } catch (error) {
        console.error(error);
        res.status(500).send('API से जवाब नहीं मिला।');
    }
});

app.listen(port, () => {
    console.log(`✅ Server चल रहा है: http://localhost:${port}`);
});
