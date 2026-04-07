import React from 'react'
import StatusBar from '../components/StatusBar'
import FileExplorer from '../components/FileExplorer'
import EditorWindow from '../components/AIPanel'
import AIPanel from '../components/EditorWindow'
import RunBar from '../components/RunBar'

const IDELayout: React.FC = () => {
    return (
        <div className="h-screen w-screen flex flex-col bg-[#1c1c1e] overflow-hidden font-['SF_Pro_Text',system-ui,sans-serif]">
            <StatusBar />

            <div className="flex flex-1 overflow-hidden">
                <FileExplorer />
                <EditorWindow />
                <AIPanel />
            </div>

            <RunBar />
        </div>
    )
}

export default IDELayout
