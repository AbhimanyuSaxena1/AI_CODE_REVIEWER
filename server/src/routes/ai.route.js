import { Router } from "express";
import reviewController from "../controllers/ai.controller.js";


const aiRoute = Router()

aiRoute.post('/review',reviewController)

export default aiRoute