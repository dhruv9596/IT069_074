const mongoose = require('mongoose');

const UserInfo = mongoose.Schema({
    name : {type : String, require:true},
    email : {type : String, require:true},
    phone : {type : String, require:true},
    password : {type:String, require:true}
},  { timestamps: true });

module.exports = mongoose.model('userdetail', UserInfo);