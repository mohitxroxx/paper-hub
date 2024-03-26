import { Request,Response} from "express"
const getdata=async(req:Request,res:Response)=>{
    return res.send("Data accessed")
}
const getfiles=async(req:Request,res:Response)=>{
    return res.send("File accessed")
}
const files={
    getdata,
    getfiles
}

export default files