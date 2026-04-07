import React, { useState } from 'react'
import { useIDEStore } from '../store/useIDEStore'

const INITIAL_FILES = [
    'main.tsx',
    'App.tsx',
    'index.css',
    'store/useIDEStore.ts',
]

const FileExplorer: React.FC = () => {
    const { currentFile, setCurrentFile } = useIDEStore()
    const [files, setFiles] = useState<string[]>(INITIAL_FILES)
    const [newFileName, setNewFileName] = useState('')

    const handleAddFile = () => {
        const trimmed = newFileName.trim()
        if (!trimmed || files.includes(trimmed)) return
        setFiles((prev) => [...prev, trimmed])
        setCurrentFile(trimmed)
        setNewFileName('')
    }

    return (
        <div className="w-52 bg-[#1c1c1e] border-r border-[#3a3a3c] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-3 py-2 border-b border-[#3a3a3c]">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#636366]">
                    Explorer
                </span>
            </div>

            {/* File list */}
            <div className="flex-1 overflow-y-auto py-1">
                {files.map((name) => (
                    <button
                        key={name}
                        onClick={() => setCurrentFile(name)}
                        className={`w-full text-left px-4 py-1.5 text-[12px] font-mono truncate transition-colors
              ${currentFile === name
                                ? 'bg-[#3a3a3c] text-white'
                                : 'text-[#98989d] hover:bg-[#2c2c2e] hover:text-[#e5e5e7]'
                            }`}
                    >
                        {name}
                    </button>
                ))}
            </div>

            {/* New file input */}
            <div className="p-2 border-t border-[#3a3a3c]">
                <div className="flex items-center gap-1 rounded bg-[#2c2c2e] border border-[#3a3a3c] px-2 py-1 focus-within:border-[#0a84ff] transition-colors">
                    <span className="text-[#48484a] text-[11px]">+</span>
                    <input
                        type="text"
                        value={newFileName}
                        onChange={(e) => setNewFileName(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAddFile()}
                        placeholder="new-file.tsx"
                        className="flex-1 bg-transparent text-[11px] font-mono text-[#e5e5e7] placeholder-[#48484a] outline-none"
                    />
                </div>
            </div>
        </div>
    )
}

export default FileExplorer
