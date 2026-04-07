import React from 'react'

const actions = [
    { label: 'Format Code', icon: '⌥F', desc: 'Prettier-style formatting', isOlama: false },
    { label: 'Enforce Style', icon: '⌥S', desc: 'Apply coding conventions', isOlama: false },
    { label: 'Add Boilerplate', icon: '⌥B', desc: 'Component / hook scaffold', isOlama: true },
    { label: 'Explain Code', icon: '⌥E', desc: 'Line-by-line breakdown', isOlama: true },
]

const AIPanel: React.FC = () => {
    return (
        <div className="w-64 bg-[#1c1c1e] border-l border-[#3a3a3c] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-3 py-2 border-b border-[#3a3a3c] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0a84ff] shadow-[0_0_6px_#0a84ff]" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#636366]">
                    AI Assistant
                </span>
            </div>

            {/* Action buttons */}
            <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
                {actions.map((a) => (
                    <button
                        key={a.label}
                        className={`group w-full text-left rounded-lg ${!a.isOlama ? "bg-[#222239]" : "bg-[#392922]"
                            } hover:bg-[#3a3a3c] border border-[#3a3a3c] hover:border-[#0a84ff] transition-all px-3 py-2.5`}
                    >
                        <div className="flex items-center justify-between mb-0.5">
                            <span className="text-[12px] text-[#e5e5e7] font-medium">{a.label}</span>
                            <span className="text-[10px] text-[#48484a] font-mono group-hover:text-[#0a84ff] transition-colors">
                                {a.icon}
                            </span>
                        </div>
                        <span className="text-[11px] text-[#636366]">{a.desc}</span>
                    </button>
                ))}
            </div>

            {/* Chat input stub */}
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
        </div >
    )
}

export default AIPanel
