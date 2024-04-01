import mongoose from 'mongoose'

// interface IFiles {
//     link: Array<string>
//     description: string
// }

const fileLinkSchema = new mongoose.Schema({
    fileId: {
        type: mongoose.Schema.Types.ObjectId,
        alias: '_id',
        unique: true,
        index: true,
        required: true,
        auto: true,
      },
    link: {
        type: [String],
        required: true
    },
    type: {
        type: String,
        default: ""
    }
}, { _id: false })

// interface ISubject {
//     subject-name: string
//     files: IFiles[]
// }

const subjectSchema = new mongoose.Schema({
    subjectId: {
        type: mongoose.Schema.Types.ObjectId,
        alias: '_id',
        unique: true,
        index: true,
        required: true,
        auto: true,
      },
    subjectName: {
        type: String,
        required: true
    },
    files: [fileLinkSchema]
}, { _id: false })

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
    branchId: {
      type: mongoose.Schema.Types.ObjectId,
      alias: '_id',
      unique: true,
      index: true,
      required: true,
      auto: true,
    },
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
}, { _id: false })

const PaperHub = new mongoose.Schema({
    firstYear:{
        type:[branchSchema],
        default:[]
    },
    secondYear:{
        type:[branchSchema],
        default:[]
    },
    thirdYear:{
        type:[branchSchema],
        default:[]
    },
    forthYear:{
        type:[branchSchema],
        default:[]
    },
})

const files = mongoose.model('PaperHub File', PaperHub)

export default files 