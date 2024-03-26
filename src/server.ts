import express,{Request,Response} from 'express'
import cors from 'cors'
import cookieparser from 'cookie-parser'
import connectDB  from './configs/db'
import user from './routes/user_routes'
import api from './routes/file_routes'

connectDB()
const app=express()
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieparser())
const port:number=5000

app.get('/',(req:Request,res:Response):Response=>{
    return res.send("Server is Live!!🚀")

})
app.use('/user',user)
app.use('/api',api)


app.listen(port,()=>{
    console.log("Server is up and Running")
})