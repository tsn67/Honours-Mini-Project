const prettier = require("prettier");

function formatCode(code, language) {
    try {
        if (language === "javascript" || language === "js") {
            return prettier.format(code, { parser: "babel" });
        }

        if (language === "json") {
            return prettier.format(code, { parser: "json" });
        }

        return code; // fallback
    } catch (err) {
        return code;
    }
}

module.exports = { formatCode };
