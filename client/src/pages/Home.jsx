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
    loading,setLoading
  } = useEditorHook();
  return (
    <div className='w-full h-screen bg-black flex gap-2 px-5 py-5'>
      <div className="left w-1/2 bg-black  h-full" >
        <CodeEditor editorContent={editorContent} setEditorContent={setEditorContent} onSubmit={onSubmit} language={language} setLanguage={setLanguage} />
      </div>
<div className="right response-scrollbar w-1/2 h-full overflow-hidden">
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