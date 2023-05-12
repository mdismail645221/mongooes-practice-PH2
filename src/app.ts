import express, {Application, Request, Response, NextFunction, urlencoded} from 'express';
const app:Application = express()
import cors from 'cors';
import { Schema } from 'mongoose';

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
   dateOfBirth?: 'string';
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
    role: {type: String,required: true,unique: true
    },
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




    res.send('Hello World!')
  })


export default app;
