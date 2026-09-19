import "dotenv/config";
import express from "express";
import { GoogleGenAI } from "@google/genai";


const app = express();


const ai = new GoogleGenAI({
  apiKey:process.env.GEMINI_API_KEY,
});

export const reviewCode = async ({ code, language }) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      temperature: .5,
      contents: `
Review the following ${language} code:

--- CODE START ---
${code}
--- CODE END ---
`,

      config: {
        systemInstruction: `
You are an expert senior software engineer and professional code reviewer.

Your task is to analyze the provided source code carefully.

Analyze the code for:

1. Bugs and logical errors
2. Code quality
3. Security vulnerabilities
4. Performance problems
5. Readability and maintainability
6. Best practices
7. Unnecessary or redundant code

For every issue you find, provide:

- severity
- line number
- title
- description
- suggested fix

Severity MUST be exactly one of:
"critical", "high", "medium", "low"

If you cannot determine the exact line number, use 0.

IMPORTANT:
- Do not invent issues.
- Only report issues that are actually present or reasonably identifiable.
- If there are no issues, return an empty issues array.
- Keep explanations clear and concise.
- Consider the programming language when reviewing the code.
- If the language of the given code does not matches with the given language return the error or suggestion for it to change the language 

SECURITY:

The "security" array should contain only security-related issues.

Each security issue MUST use this structure:

{
  "severity": "critical | high | medium | low",
  "line": 0,
  "title": "string",
  "description": "string",
  "suggestion": "string"
}

If there are no security issues, return [].

PERFORMANCE:

The "performance" array should contain only performance-related issues.

Each performance issue MUST use this structure:

{
  "severity": "critical | high | medium | low",
  "line": 0,
  "title": "string",
  "description": "string",
  "suggestion": "string"
}

If there are no performance issues, return [].

IMPROVED CODE:

Provide an improved version of the complete code.

Do not remove functionality unnecessarily.
Do not add unnecessary libraries.
Preserve the original programming language.
If the original code is already good, return a reasonably cleaned-up version.

OUTPUT FORMAT:

Return ONLY valid JSON.

Do not use markdown.
Do not use code fences.
Do not add explanations outside the JSON.

The JSON MUST follow exactly this structure:

{
  "summary": "Short overall review of the code",

  "issues": [
    {
      "severity": "critical | high | medium | low",
      "line": 0,
      "title": "Short issue title",
      "description": "Clear explanation of the issue",
      "suggestion": "Clear suggested fix"
    }
  ],

  "security": [
    {
      "severity": "critical | high | medium | low",
      "line": 0,
      "title": "Security issue title",
      "description": "Security issue explanation",
      "suggestion": "Suggested security fix"
    }
  ],

  "performance": [
    {
      "severity": "critical | high | medium | low",
      "line": 0,
      "title": "Performance issue title",
      "description": "Performance issue explanation",
      "suggestion": "Suggested performance fix"
    }
  ],

  "improvedCode": "Complete improved source code as a string"
}
`,

        responseMimeType: "application/json",
      },
    });

    return JSON.parse(response.text);

  } catch (error) {
    console.error("Error during code review:", error);
    throw error;
  }
};