import React, { useState } from 'react'

const RunBar: React.FC = () => {
    const [running, setRunning] = useState(false)

    return (
        <div className="h-10 bg-[#1c1c1e] border-t border-[#3a3a3c] flex items-center px-4 gap-3">
            <button
                onClick={() => setRunning((r) => !r)}
                className={`flex items-center justify-center w-6 h-6 rounded-full transition-all
          ${running
                        ? 'bg-[#ff453a] hover:bg-[#ff6961]'
                        : 'bg-[#30d158] hover:bg-[#34c759]'
                    }`}
            >
                {running ? (
                    <span className="w-2 h-2 bg-white rounded-sm" />
                ) : (
                    <svg viewBox="0 0 10 12" className="w-2.5 h-2.5 fill-white ml-0.5">
                        <path d="M0 0 L10 6 L0 12 Z" />
                    </svg>
                )}
            </button>

            <span className="text-[11px] text-[#636366]">
                {running ? 'Running…' : 'Ready'}
            </span>
        </div>
    )
}

export default RunBar
