const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    title: {
        type:String,
       // default:'',
       required:true
    },
    done:{
        type:Boolean,
        //default:false,
        required:true
    }
});

const TodoModel = mongoose.model("Todo",TodoSchema);
module.exports=TodoModel;