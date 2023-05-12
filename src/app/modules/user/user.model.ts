import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

  // step2: Schema user Interface 
  const userSchema = new Schema <IUser>({
    id: {type: String, required: true,unique: true},
    password: {type: String,required: true},
    name: {
      firstName: {type: String,required:true},
      middleName: {type: String},
      lastName: {type: String,required: true}
    },
    dateOfBirth: {type: String, required: true},
    gender: {type: String, required: true},
    email: {type: String},
    contactNo:{type: String, required: true},
    emergencyContactNo: {type: String, required: true},
    presentAddress: {type: String, required: true},
    permanentAddress: {type: String, required: true}

  })
  // step3 : Model 
  const User = model<IUser>("User", userSchema);

  export default User;