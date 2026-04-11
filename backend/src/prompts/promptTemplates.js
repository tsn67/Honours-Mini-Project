function refactorPrompt(code, language) {
  return `
You are a senior ${language} developer.

Task:
Refactor the given code.

Constraints:
- Preserve exact functionality
- Improve readability and structure
- Follow best practices for ${language}
- Do NOT remove logic
- Do NOT simplify by replacing code with trivial version
- Keep code semantically equivalent

Output:
Return STRICTLY valid JSON.

Schema:
{
  "code": "refactored code as a single string",
  "changes": ["list of changes made"]
}

Rules:
- Escape all double quotes inside code using \\\"
- Do not include explanations outside JSON
- Output must start with { and end with }
- No markdown, no backticks

Code:
${code}
`;
}

function stylePrompt(code, rules) {
  return `
    You are a code stylist.
    give more better verson of this code in the following format

    // so your output must be (or generated content should have) code only
    // just the code output

    here is my code

    // don't say anything else just give me the code
  ${code}
`;
}

module.exports = {
  refactorPrompt,
  stylePrompt
};
