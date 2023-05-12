import express, {Application, Request, Response, NextFunction, urlencoded} from 'express';
const app:Application = express()
import cors from 'cors';
import { Schema, model } from 'mongoose';

// middle ware
//using cors
app.use(cors());

// parse data
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req:Request, res:Response) => {
  // interesting a test data 
  /**
   * Step1 : interface তৈরি করবো। 
   * Step2 : Schema তৈরি করবো। 
   * Step3 : Model তৈরি করবো ।
   * Step : Data query করবো। 
   */

  // step1:  creating interface 
  interface IUser {
   id: string;
   role: 'student';
   password: string;
   name: {
    firstName: string;
    middleName: string;
    lastName: string;
   }
   dateOfBirth?: string;
   gender: 'male' | 'female';
   email?: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  }

  // step2: Schema user Interface 
  const userSchema = new Schema <IUser>({
    id: {type: String, required: true,unique: true},
    role: {type: String,required: true,unique: true},
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

  //asyn fucntion
  const createUserToDB =async () => {
    const user = new User({
      id: "9879",
      role: 'student',
      password: 'abcd',
      name: {
        firstName: 'abul1',
        middleName: 'start1',
        lastName: 'three1',
      },
      dateOfBirth: '24/07/19992',
      gender: 'female',
      email: 'back@gmail.com',
      contactNo: '018721471003',
      emergencyContactNo: '01872147103',
      presentAddress: 'nai',
      permanentAddress: 'naa'
    })
    await user.save()
    console.log(user)
  }

  createUserToDB()


    res.send('Hello World!')
})


export default app;
