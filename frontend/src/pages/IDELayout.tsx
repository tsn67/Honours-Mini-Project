import React from 'react'
import StatusBar from '../components/StatusBar'
import FileExplorer from '../components/FileExplorer'
import EditorWindow from '../components/AIPanel'
import AIPanel from '../components/EditorWindow'
import RunBar from '../components/RunBar'
import { useIDEStore } from '../store/useIDEStore'

const IDELayout: React.FC = () => {
    const { isLoading } = useIDEStore()

    return (
        <div className="h-screen w-screen flex flex-col bg-[#1c1c1e] overflow-hidden font-['SF_Pro_Text',system-ui,sans-serif] relative">
            <StatusBar />

            <div className="flex flex-1 overflow-hidden">
                <FileExplorer />
                <EditorWindow />
                <AIPanel />
            </div>

            <RunBar />

            {/* Loader overlay */}
            {isLoading && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="flex flex-col items-center gap-4">
                        {/* Spinner */}
                        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                        <p className="text-white text-lg font-medium">Loading...</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default IDELayout
