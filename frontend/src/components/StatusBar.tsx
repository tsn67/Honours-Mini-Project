import React, { useEffect, useState } from 'react'
import { useIDEStore } from '../store/useIDEStore'

const StatusBar: React.FC = () => {
    const { currentFile, displayLanguage } = useIDEStore()
    const [time, setTime] = useState('')

    useEffect(() => {
        const tick = () => setTime(
            new Date().toLocaleTimeString('en-US', {
                hour: '2-digit', minute: '2-digit', hour12: false,
            })
        )
        tick()
        const id = setInterval(tick, 1000)
        return () => clearInterval(id)
    }, [])

    return (
        <div className="h-7 bg-[#2c2c2e] border-b border-[#3a3a3c] flex items-center px-4 select-none">
            {/* Left — language */}
            <div className="flex-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#30d158]" />
                <span className="text-[11px] text-[#98989d] font-medium tracking-wide">
                    {displayLanguage()}
                </span>
            </div>

            {/* Center — file name */}
            <div className="flex-1 flex justify-center">
                <span className="text-[12px] text-[#e5e5e7] font-semibold tracking-tight">
                    {currentFile}
                </span>
            </div>

            {/* Right — clock */}
            <div className="flex-1 flex justify-end">
                <span className="text-[12px] text-[#98989d] font-mono tabular-nums">
                    {time}
                </span>
            </div>
        </div>
    )
}

export default StatusBar
