import { Request, Response } from "express"
import files from '../models/file_schema'
// interface fileBody {
//     year: string,
//     branch: string,
//     subject_name: string,
//     type: string,
//     link: Array<string>,
//     description: string
// }
const viewfiles = async (req: Request, res: Response) => {
    try {
        let year = req.query.year
        let type = req.query.type
        let subject = req.query.subject

        if (!year)
            return res.status(400).json({ error: "Year need to be specified" })

        if (year != 'firstYear' && year != 'secondYear' && year != 'thirdYear' && year != 'forthYear')
            return res.status(400).json({ error: `Invalid year entered, no data found for ${year}` })

        const alldata = await files.find({})

        if (!alldata)
            return res.status(400).json({ msg: "No data found" })

        if (year === "firstYear") {

            const fileData = alldata[0].firstYear[0].CSE

            if (!subject && !type)
                return res.status(200).json(fileData)

            if (!type && subject) {

                const filteredData = fileData.filter(item => item.subjectName === subject)

                if (filteredData.length === 0)
                    return res.status(404).json({ error: "No subject data found" })

                return res.status(200).json(filteredData)

            }

            if (type && !subject) {

                const filteredData = fileData.map(item => item.files.filter(all => all.type === type))
                if (filteredData.length === 0)
                    return res.status(404).json({ error: "No subject data found" })

                return res.status(200).json({ type, filteredData })

            }

            if (type && subject) {
                const subjectData = fileData.filter(item => item.subjectName === subject)
                const filteredData = subjectData.map(item => item.files.filter(data => data.type === type))
                if (filteredData.length === 0)
                    return res.status(404).json({ error: "no data found for this query" })

                return res.status(200).json({ subject, filteredData })
            }

            else
                return res.status(400).json({ error: "error fetching the data", errorCode: "Invalid query" })
        }

    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Internal server error" })
    }
}

const addfiles = async (req: Request, res: Response) => {
    try {
        const { year, branch, subject, file_info } = req.body
        let existingDocument: any = await files.findOne({})

        if (!existingDocument) {
            const newSubject = {
                subjectName: subject.toLowerCase(),
                files: file_info
            }
            const newDocument = {
                [year]: {
                    [branch]: [newSubject]
                }
            }
            const savedData = await files.create(newDocument)
            return res.status(201).json({ msg: "Files added successfully" })
        }

        if (!existingDocument[year][0][branch]) {
            existingDocument[year][0][branch] = []
        }

        let existingSubject = existingDocument[year][0][branch].find((sub: any) => sub.subjectName === subject)
        if (existingSubject) {
            existingSubject.files.push(...file_info)
        } else {
            const newSubject = {
                subjectName: subject,
                files: file_info
            }
            existingDocument[year][0][branch].push(newSubject)
        }
        const savedData = await existingDocument.save()
        return res.status(201).json({ msg: "Files added successfully" })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error occured while adding data' })
    }
}

const all_exports = {
    viewfiles,
    addfiles
}

export default all_exports