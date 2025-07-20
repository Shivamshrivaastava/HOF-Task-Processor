const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    text : {type :String, required:true},
    done  :{type:Boolean, default:false},
    priority :{type:Number, default:1},
    tags: [String]
});
module.exports = mongoose.model('Task', TaskSchema);