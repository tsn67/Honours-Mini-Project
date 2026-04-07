// src/utils/getMonacoLanguage.ts

const EXTENSION_MAP: Record<string, string> = {
    // TypeScript / JavaScript
    ts: 'typescript',
    tsx: 'typescript',
    js: 'javascript',
    jsx: 'javascript',
    mjs: 'javascript',
    cjs: 'javascript',

    // Web
    html: 'html',
    htm: 'html',
    css: 'css',
    scss: 'scss',
    sass: 'scss',
    less: 'less',

    // Data / Config
    json: 'json',
    jsonc: 'json',
    yaml: 'yaml',
    yml: 'yaml',
    toml: 'ini',        // Monaco has no TOML, ini is closest
    xml: 'xml',
    svg: 'xml',

    // Backend / scripting
    py: 'python',
    rb: 'ruby',
    php: 'php',
    java: 'java',
    kt: 'kotlin',
    go: 'go',
    rs: 'rust',
    cs: 'csharp',
    cpp: 'cpp',
    c: 'c',
    h: 'c',
    swift: 'swift',
    sh: 'shell',
    bash: 'shell',
    zsh: 'shell',

    // Docs / Markup
    md: 'markdown',
    mdx: 'markdown',
    txt: 'plaintext',
    log: 'plaintext',

    // DB / Query
    sql: 'sql',
    graphql: 'graphql',
    gql: 'graphql',
}

// Display names for the status bar (human-readable)
const DISPLAY_NAME: Record<string, string> = {
    typescript: 'TypeScript',
    javascript: 'JavaScript',
    html: 'HTML',
    css: 'CSS',
    scss: 'SCSS',
    less: 'Less',
    json: 'JSON',
    yaml: 'YAML',
    ini: 'TOML',
    xml: 'XML',
    python: 'Python',
    ruby: 'Ruby',
    php: 'PHP',
    java: 'Java',
    kotlin: 'Kotlin',
    go: 'Go',
    rust: 'Rust',
    csharp: 'C#',
    cpp: 'C++',
    c: 'C',
    swift: 'Swift',
    shell: 'Shell',
    markdown: 'Markdown',
    plaintext: 'Plain Text',
    sql: 'SQL',
    graphql: 'GraphQL',
}

export const getMonacoLanguage = (filename: string): string => {
    const ext = filename.split('.').pop()?.toLowerCase() ?? ''
    return EXTENSION_MAP[ext] ?? 'plaintext'
}

export const getDisplayLanguage = (filename: string): string => {
    const monacoId = getMonacoLanguage(filename)
    return DISPLAY_NAME[monacoId] ?? 'Plain Text'
}
