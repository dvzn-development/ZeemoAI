const { Configuration, OpenAIApi } = require('openai');
const express = require('express');
const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

router.post('/', async (req, res) => {
  try {
    const { messages } = req.body;
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.7
    });
    res.json(completion.data);
  } catch (error) {
    console.error('OpenAI error:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
