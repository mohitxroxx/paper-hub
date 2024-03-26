import mongoose from 'mongoose'

const files=new mongoose.Schema({
    link:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default:""
    }
})

const subjects=new mongoose.Schema({
    subject_name:{
        type:String,
        required:true
    },
    notes:{
        type:[files],
        default:[]
    },
    papers:{
        type:[files],
        default:[]
    }
})

const branch_details=new mongoose.Schema({
    CSE:{
        type:[subjects],
        default:[]
    },
    // CS:{
    //     type:[subjects],
    //     default:[]
    // },
    // CS_IT:{
    //     type:[subjects],
    //     default:[]
    // },
    // CSE_DS:{
    //     type:[subjects],
    //     default:[]
    // },
    // CSE_AIML:{
    //     type:[subjects],
    //     default:[]
    // },
    // CSE_HINDI:{
    //     type:[subjects],
    //     default:[]
    // },
    // AI_ML:{
    //     type:[subjects],
    //     default:[]
    // },
    IT:{
        type:[subjects],
        default:[]
    },
    ECE:{
        type:[subjects],
        default:[]
    },
    ME:{
        type:[subjects],
        default:[]
    },
    EN:{
        type:[subjects],
        default:[]
    },
    CE:{
        type:[subjects],
        default:[]
    }
})

const fileSchema=new mongoose.Schema({
    First_Year:{
        type:[branch_details],
        default:[]
    },
    Second_Year:{
        type:[branch_details],
        default:[]
    },
    Third_Year:{
        type:[branch_details],
        default:[]
    },
    Forth_Year:{
        type:[branch_details],
        default:[]
    }
})

const data = mongoose.model('PaperHub File', fileSchema);

export default data