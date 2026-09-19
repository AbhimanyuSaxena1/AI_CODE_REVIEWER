import { useState } from "react";
import sendReviewRequest from "../services/reviewApi.js";

const useEditorHook = () => {
    const [editorContent, setEditorContent] = useState('');
    const [language, setLanguage] = useState('javascript');
    const [reviewResult, setReviewResult] = useState(null);
    const [loading,setLoading] = useState(false)

    const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await sendReviewRequest(
       { editorContent,
        language}
      );
      
  
      setReviewResult(response);

    } catch (error) {
      console.error("Review Error:", error);

    } finally {
      setLoading(false);
    }
  };

    return {
        editorContent,
        setEditorContent,
        onSubmit,
        language,
        setLanguage,
        reviewResult,
        setLoading,
        loading
    }

}

export default useEditorHook;