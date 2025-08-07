const { OpenAI } = require('openai');
const express = require('express');
const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post('/', async (req, res) => {
  try {
    const { messages } = req.body;
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.7
    });
    res.json(completion);
  } catch (error) {
    console.error('OpenAI Error:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;