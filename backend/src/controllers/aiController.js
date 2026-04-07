const ollama = require("../services/ollamaService");
const { formatCode } = require("../utils/formatter");
const {
    refactorPrompt,
    reviewPrompt,
    stylePrompt
} = require("../prompts/promptTemplates");

// REFRACTOR
async function refactor(req, res) {
    try {
        const { code, language = "javascript" } = req.body;

        const formatted = formatCode(code, language);
        const prompt = refactorPrompt(formatted, language);

        const response = await ollama.generate(prompt);

        res.json({
            formatted,
            result: safeJSONParse(response)
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// REVIEW
async function review(req, res) {
    try {
        const { code } = req.body;

        const prompt = reviewPrompt(code);
        const response = await ollama.generate(prompt);

        res.json({
            result: safeJSONParse(response)
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// STYLE
async function style(req, res) {
    try {
        const { code, rules } = req.body;

        const prompt = stylePrompt(code, rules);
        const response = await ollama.generate(prompt);

        res.json({
            code: response
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// SAFE JSON PARSE (important)
function safeJSONParse(text) {
    try {
        return JSON.parse(text);
    } catch {
        return { raw: text };
    }
}

module.exports = {
    refactor,
    review,
    style
};
