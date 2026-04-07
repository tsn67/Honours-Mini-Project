const axios = require("axios");

const OLLAMA_URL = process.env.OLLAMA_URL;
const MODEL = process.env.MODEL;

async function generate(prompt) {
    try {
        const response = await axios.post(OLLAMA_URL, {
            model: MODEL,
            prompt,
            stream: false
        });

        return response.data.response;
    } catch (err) {
        throw new Error("Ollama error: " + err.message);
    }
}

module.exports = { generate };
