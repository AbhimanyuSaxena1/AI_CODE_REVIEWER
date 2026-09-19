import axiosInstance from "./axiosInstance";

 const sendReviewRequest = async ({editorContent,language}) => {
    try{
        const response = await axiosInstance.post('/ai/review', { editorContent, language });
        return response.data.review;
    }
    catch (error) {
        console.error("Error sending review request:", error);
        throw error;
    }
}
export default sendReviewRequest;