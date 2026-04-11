import { useIDEStore } from "../store/useIDEStore";

const BASE_URL = "http://localhost:5000/api";

interface RefactorResponse {
    formatted: string;
    result?: {
        code?: string;
        changes?: string[];
    };
}

interface StyleResponse {
    result?: {
        code?: string;
        changes?: string[];
    };
}

// FORMAT CODE (uses /refactor → already includes formatting step)
export async function formatCode(code: string, language: string) {
    const res = await fetch(`${BASE_URL}/refactor`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, language }),
    });

    const data: RefactorResponse = await res.json();

    return data?.result?.code || data.formatted;
}

// STYLE ENFORCEMENT
export async function enforceStyle(code: string) {
    const rules = {
        naming: "camelCase",
        max_line_length: 100,
        avoid_nested_loops: true,
        consistent_formatting: true,
    };

    const res = await fetch(`${BASE_URL}/style`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, rules }),
    });

    const data: StyleResponse = await res.json();

    let outputCode = data.result?.raw

    // Extract code between ```anyword and ```
    const match = outputCode.match(/```\w+\n([\s\S]*?)\n```/)
    if (match) {
        outputCode = match[1]  // Get the captured code content
    }

    console.log(outputCode);

    console.log(outputCode);
    return outputCode;
}
