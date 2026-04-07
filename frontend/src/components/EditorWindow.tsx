import React from "react";
import Editor from "@monaco-editor/react";
import { useIDEStore } from "../store/useIDEStore";

const EditorWindow: React.FC = () => {
    const { currentFile, files, updateFile, monacoLanguage } = useIDEStore();

    return (
        <div className="flex-1 bg-[#1e1e1e] flex flex-col overflow-hidden">
            {/* Tab bar */}
            <div className="h-8 bg-[#252526] border-b border-[#3a3a3c] flex items-end px-2 gap-0.5">
                <div className="flex items-center gap-2 px-3 py-1 bg-[#1e1e1e] rounded-t text-[11px] text-[#cccccc] border-t border-x border-[#3a3a3c]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0a84ff]" />
                    {currentFile}
                </div>
            </div>

            {/* Monaco Editor */}
            <div className="flex-1">
                <Editor
                    height="100%"
                    language={monacoLanguage()}
                    value={files[currentFile] || ""}
                    theme="vs-dark"
                    onChange={(val) => updateFile(currentFile, val || "")}
                    options={{
                        fontSize: 16,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                    }}
                />
            </div>
        </div>
    );
};

export default EditorWindow;
