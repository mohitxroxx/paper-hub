import mongoose from 'mongoose'

const adminSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    designation:{
        type:String,
        enum:['HOD','Student','Teacher']
    },
    files_added:{
        type:[String],
    }
})


const Admins = mongoose.model('PaperHub Admin', adminSchema)

export default Admins