import express from 'express'
import aiRoute from './routes/ai.route.js'


const app = express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("server is running")
})
app.use('/api/ai',aiRoute)
export default app