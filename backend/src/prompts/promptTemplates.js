function refactorPrompt(code, language) {
    return `
You are a senior ${language} developer.

Refactor the code:
- Improve readability
- Follow best practices
- Do NOT change functionality

Return JSON:
{
  "code": "...",
  "changes": []
}

Code:
${code}
`;
}

function reviewPrompt(code) {
    return `
Review this code.

Return JSON:
{
  "issues": [],
  "improvements": [],
  "summary": ""
}

Code:
${code}
`;
}

function stylePrompt(code, rules) {
    return `
Apply these coding rules strictly:
${JSON.stringify(rules, null, 2)}

Return ONLY code.

Code:
${code}
`;
}

module.exports = {
    refactorPrompt,
    reviewPrompt,
    stylePrompt
};
