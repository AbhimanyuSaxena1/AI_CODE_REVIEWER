import React from 'react'
import CodeEditor from '../components/CodeEditor';
import ReviewResult from '../components/ReviewResult';
import useEditorHook from '../hooks/useEditorHook'
import ReviewPlaceholder from "../components/ReviewPlaceholder";
import ReviewLoader from '../components/ReviewLoader';

const Home = () => {
  const {
    editorContent,
    setEditorContent,
    onSubmit,
    language,
    setLanguage,
    reviewResult,
    loading,
    setLoading
  } = useEditorHook();

  return (
    <div className="w-full min-h-screen bg-black flex flex-col lg:flex-row gap-3 px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 overflow-hidden">

      {/* Left - Code Editor */}
      <div className="left w-full lg:w-1/2 bg-black h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[calc(100vh-2.5rem)] min-h-0">
        <CodeEditor
          editorContent={editorContent}
          setEditorContent={setEditorContent}
          onSubmit={onSubmit}
          language={language}
          setLanguage={setLanguage}
        />
      </div>

      {/* Right - Review Result */}
      <div className="right response-scrollbar w-full lg:w-1/2 h-[45vh] sm:h-[40vh] md:h-[35vh] lg:h-[calc(100vh-2.5rem)] min-h-0 overflow-hidden">
        {loading ? (
          <ReviewLoader />
        ) : reviewResult ? (
          <ReviewResult review={reviewResult} />
        ) : (
          <ReviewPlaceholder />
        )}
      </div>

    </div>
  )
}

export default Home
