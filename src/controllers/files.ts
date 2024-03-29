import { Request, Response } from "express"
import {FirstYearData, SecondYearData, ThirdYearData, ForthYearData} from '../models/file_schema'
interface fileBody {
    year: string,
    branch: string,
    subject_name: string,
    type: string,
    link: Array<string>,
    description: string
}
const allfiles = async (req: Request, res: Response) => {
    try {
        const alldata = await data.find({})
        if (alldata.length != 0)
            return res.status(200).json(alldata)
        return res.status(400).json({ msg: "No data found" })
    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: "Error occured while fetching data" })
    }
}

const addfiles = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error occured while adding data' })
    }
}

const files = {
    // allfiles,
    addfiles
}

export default files