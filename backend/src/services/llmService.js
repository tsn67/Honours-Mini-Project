// services/llmService.js
const axios = require("axios");

const LLM_URL = process.env.LLM_URL;
const MODEL = process.env.MODEL;
const API_KEY = process.env.API_KEY;

async function generate(prompt) {
    try {
        const response = await axios.post(
            LLM_URL,
            {
                model: MODEL,
                temperature: 0,
                messages: [
                    {
                        role: "system",
                        content: "Return ONLY valid JSON. No markdown or explanations."
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                }
            }
        );

        const content = response?.data?.choices?.[0]?.message?.content;

        if (!content) {
            throw new Error("LLM returned empty response");
        }

        return content;
    } catch (err) {
        console.error("LLM ERROR:", err.response?.data || err.message);
        throw new Error("LLM request failed");
    }
}

module.exports = {
    generate
};
