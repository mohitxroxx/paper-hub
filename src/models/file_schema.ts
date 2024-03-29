import mongoose from 'mongoose'

// interface IFiles {
//     link: Array<string>
//     description: string
// }

const fileLinkSchema = new mongoose.Schema({
    link: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        default: ""
    }
})

// interface ISubject {
//     subject_name: string
//     files: IFiles[]
// }

const subjectSchema = new mongoose.Schema({
    subject_name: {
        type: String,
        required: true
    },
    files: [fileLinkSchema]
})

// interface IBranch {
//     CSE: ISubject[]
//     ECE: ISubject[]
//     IT: ISubject[]
//     ME: ISubject[]
//     EN: ISubject[]
//     CE: ISubject[]
//     [key: string]: ISubject[]
// }

const branchSchema = new mongoose.Schema({
    CSE:{
        type:[subjectSchema],
        default:[]
    },
    IT:{
        type:[subjectSchema],
        default:[]
    },
    ECE:{
        type:[subjectSchema],
        default:[]
    },
    ME:{
        type:[subjectSchema],
        default:[]
    },
    EN:{
        type:[subjectSchema],
        default:[]
    },
    CE:{
        type:[subjectSchema],
        default:[]
    }
})

const PaperHub = new mongoose.Schema({
    First_Year: [branchSchema],
    Second_Year: [branchSchema],
    Third_Year: [branchSchema],
    Forth_Year: [branchSchema]
})

const files = mongoose.model('PaperHub File', PaperHub)

export default files 