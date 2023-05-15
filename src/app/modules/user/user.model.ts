import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

  // Create a new Model type that knows about IUserMethods...
  // type UserModel = Model<IUser, {}, IUserMethods>;

  // step2: Schema user Interface 
  const userSchema = new Schema <IUser, UserModel, IUserMethods>({
    id: {type: String, required: true,unique: true},
    role: {type:String},
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


  userSchema.static('getAdminUsers', async function getAdminUsers() {
     const admins = await this.find({role: 'admin'});
     return admins
  });


  // userSchema.method('fullName', function fullName() {
  //   return this.firstName + ' ' + this.lastName;
  // })

  userSchema.method('fullName', function fullName(){
    return this.name.firstName + "" + this.name.lastName;
  })

  // step3 : Model 
  const User = model<IUser, UserModel>("User", userSchema);
  // console.log({'model': User})

  export default User;