import { reviewCode } from "../services/ai.service.js"

const reviewController = async (req,res)=>{
    const {editorContent,language} = req.body

    if(!editorContent) {
        return res.status(400).json({error:"Please Enter a Code for Review"})
    }
    const review =await reviewCode({code:editorContent,language})
    
    if(!review){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.status(200).json({success:true,
        review
    })
}
export default reviewController