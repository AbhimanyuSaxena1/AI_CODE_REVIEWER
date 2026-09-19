import { useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({
  editorContent,
  setEditorContent,
  onSubmit,
  language,
  setLanguage,
  reviewResult,
}) => {
  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  const decorationsRef = useRef([]);

  // Monaco mount
  const handleEditorMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
  };

  // Highlight review lines
  useEffect(() => {
    if (!editorRef.current || !monacoRef.current) {
      return;
    }

    const editor = editorRef.current;
    const monaco = monacoRef.current;

    // Remove old decorations
    decorationsRef.current = editor.deltaDecorations(
      decorationsRef.current,
      []
    );

    if (!reviewResult?.issues?.length) {
      return;
    }

    const decorations = reviewResult.issues
      .filter((issue) => issue.line > 0)
      .map((issue) => {
        let className = "review-line-medium";

        switch (issue.severity?.toLowerCase()) {
          case "critical":
            className = "review-line-critical";
            break;

          case "high":
            className = "review-line-high";
            break;

          case "medium":
            className = "review-line-medium";
            break;

          case "low":
            className = "review-line-low";
            break;
        }

        return {
          range: new monaco.Range(
            issue.line,
            1,
            issue.line,
            1
          ),

          options: {
            isWholeLine: true,
            className,
          },
        };
      });

    decorationsRef.current = editor.deltaDecorations(
      decorationsRef.current,
      decorations
    );

  }, [reviewResult]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg border border-gray-700 bg-black">

      {/* Monaco Editor */}
      <Editor
        height="100%"
        width="100%"
        language={language}
        value={"//write your code here for the review"}
        onChange={(value) => setEditorContent(value || "")}
        theme="hc-white"
        onMount={handleEditorMount}
        options={{
          minimap: {
            enabled: false,
          },

          fontSize: 15,

          automaticLayout: true,

          tabSize: 2,

          wordWrap: "on",

          padding: {
            top: 20,
            bottom: 80,
            left: 12,
            right: 12,
          },

          scrollbar: {
            vertical: "auto",
            horizontal: "auto",
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8,
          },

          lineNumbers: "on",

          renderLineHighlight: "all",

          smoothScrolling: true,
        }}
      />

      {/* Bottom Controls */}
      <div className="
        absolute
        bottom-3
        left-3
        right-3
        z-10
        flex
        flex-col
        gap-2
        sm:bottom-4
        sm:left-auto
        sm:right-4
        sm:flex-row
        sm:items-center
        sm:justify-end
        sm:gap-2
      ">

        {/* Language Selector */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="
            w-full
            cursor-pointer
            rounded-md
            border
            border-gray-700
            bg-black
            px-3
            py-2
            text-xs
            text-white
            outline-none
            transition
            hover:border-gray-500
            focus:border-gray-400

            sm:w-auto
            sm:text-sm
          "
        >
          <option value="javascript">
            JavaScript
          </option>

          <option value="typescript">
            TypeScript
          </option>

          <option value="python">
            Python
          </option>

          <option value="java">
            Java
          </option>

          <option value="cpp">
            C++
          </option>

          <option value="csharp">
            C#
          </option>

          <option value="go">
            Go
          </option>
        </select>

        {/* Review Button */}
        <button
          type="button"
          onClick={onSubmit}
          className="
            w-full
            cursor-pointer
            rounded-md
            bg-gray-200
            px-4
            py-2
            text-xs
            font-semibold
            text-black
            transition

            sm:w-auto
            sm:text-sm
          "
        >
          Review Code
        </button>

      </div>

    </div>
  );
};

export default CodeEditor;
