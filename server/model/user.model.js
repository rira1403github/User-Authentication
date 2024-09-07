
import mongoose from 'mongoose';
const userSchemas = new mongoose.Schema(
 {
  username : {
    type : String,
    required : [true, "Please provide Unique Username"],
    unique : [true,"Username Exist"]
  },
  password : {
    type:String,
    required : [true,"Please provide password"],
    unique:false,
  },
  email:{
    type:String,
    required : [true,"Please provide email"],
    unique: [true,"Email already Exists"]
  },
  firstName: {
    type:String,
  },
  lastName: {
    type:String,
  },
  mobile:{
    type:Number,
  },
  address:{
    type:String,
  },
  profile:{
    type:String,
  }
 },{timestamps:true}
);

export default mongoose.model.users || mongoose.model('user', userSchemas);