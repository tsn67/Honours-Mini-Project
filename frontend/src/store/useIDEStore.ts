import { create } from 'zustand'
import { getMonacoLanguage, getDisplayLanguage } from '../utils/getMonacoLanguage'

interface IDEState {
    currentFile: string
    files: Record<string, string>
    isLoading: boolean
    setCurrentFile: (name: string) => void
    updateFile: (name: string, content: string) => void
    setIsLoading: (loading: boolean) => void
    monacoLanguage: () => string
    displayLanguage: () => string
}

export const useIDEStore = create<IDEState>((set, get) => ({
    currentFile: 'main.tsx',
    isLoading: false,

    files: {
        'main.tsx': `// main.tsx\nimport React from 'react'\n\nexport default function App() {\n  return <div>Hello World</div>\n}`
    },

    setCurrentFile: (name) => set({ currentFile: name }),

    updateFile: (name, content) =>
        set((state) => ({
            files: {
                ...state.files,
                [name]: content
            }
        })),

    setIsLoading: (loading) => set({ isLoading: loading }),

    monacoLanguage: () => getMonacoLanguage(get().currentFile),
    displayLanguage: () => getDisplayLanguage(get().currentFile),
}))
