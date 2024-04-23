const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.NEXT_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export default async function handler(req, res) {

  if (typeof req.body.prompt === "string") {
    const prompt = req.body.prompt;
    const result = await model.generateContent(prompt);
    const response =  result.response;
    const text = response.text();
    console.log(text);

    res.status(200).json({ text: response.text() })
  } else {
    res.status(200).json({ text: "Invalid prompt provided." })
  }
}





