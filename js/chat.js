import { Configuration, OpenAIApi } from 'openai';
import cors from 'cors';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  await cors()(req, res, () => {});

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.7
    });
    
    return res.status(200).json(completion.data);
  } catch (error) {
    console.error('OpenAI API error:', error);
    return res.status(500).json({ error: error.message });
  }
}
