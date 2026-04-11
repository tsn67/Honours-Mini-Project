import React from 'react'
import { useIDEStore } from '../store/useIDEStore'
import { formatCode, enforceStyle } from '../api/TrainedAgentApi'

const actions = [
    { label: 'Format Code', icon: '⌥F', desc: 'Prettier-style formatting', key: 'format' },
    { label: 'Enforce Style', icon: '⌥S', desc: 'Apply coding conventions', key: 'style' },
]

const AIPanel: React.FC = () => {
    const {
        isLoading,
        currentFile,
        files,
        updateFile,
        displayLanguage,
        setIsLoading
    } = useIDEStore()

    const [loading, setLoading] = React.useState<string | null>(null)

    const handleAction = async (key: string) => {
        const code = files[currentFile]
        const language = displayLanguage()

        try {
            setLoading(key)
            setIsLoading(true)

            let updatedCode = code

            if (key === 'format') {
                updatedCode = await formatCode(code, language)
            }

            if (key === 'style') {
                updatedCode = await enforceStyle(code)
            }

            updateFile(currentFile, updatedCode)

        } catch (err) {
            console.error("AI Error:", err)
        } finally {
            setIsLoading(false)
            setLoading(null)
        }
    }

    return (
        <div className="w-64 bg-[#1c1c1e] border-l border-[#3a3a3c] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-3 py-2 border-b border-[#3a3a3c] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0a84ff] shadow-[0_0_6px_#0a84ff]" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#636366]">
                    AI Assistant
                </span>
            </div>

            {/* Actions */}
            <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
                {actions.map((a) => (
                    <button
                        key={a.label}
                        onClick={() => handleAction(a.key)}
                        disabled={loading !== null}
                        className={`group w-full text-left rounded-lg bg-[#2c2c2e]
                        hover:bg-[#3a3a3c] border border-[#3a3a3c]
                        hover:border-[#0a84ff] transition-all px-3 py-2.5
                        ${loading === a.key ? "opacity-60 cursor-not-allowed" : ""}`}
                    >
                        <div className="flex items-center justify-between mb-0.5">
                            <span className="text-[12px] text-[#e5e5e7] font-medium">
                                {loading === a.key ? "Processing..." : a.label}
                            </span>
                            <span className="text-[10px] text-[#48484a] font-mono group-hover:text-[#0a84ff] transition-colors">
                                {a.icon}
                            </span>
                        </div>
                        <span className="text-[11px] text-[#636366]">{a.desc}</span>
                    </button>
                ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-[#3a3a3c]">
                <div className="flex items-center gap-2 rounded-lg bg-[#2c2c2e] border border-[#3a3a3c] px-3 py-2">
                    <input
                        type="text"
                        placeholder="Search option.."
                        className="flex-1 bg-transparent text-[12px] text-[#e5e5e7] placeholder-[#48484a] outline-none"
                    />
                    <span className="text-[#0a84ff] text-[12px]">↵</span>
                </div>
            </div>
        </div>
    )
}

export default AIPanel
