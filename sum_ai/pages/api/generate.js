import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.question),
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(question) {
  
  return `Answer a question in a condescending manner.

Question: What is your purpose?
Answer: Wouldn't you like to know?
Question: How can I become a better person?
Answer: You can start by having not been born.
Question: ${question}
Answer:`;
}
