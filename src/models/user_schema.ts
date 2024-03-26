import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    branch:{
        type:String,
        // default:''
    },
    year:{
        type:String,
        // default:''
    },
    favorites:{
        type:[String],
        deafult:[]
    }
})

const Users = mongoose.model('PaperHub User', userSchema)

export default Users