import express, {Application, Request, Response, NextFunction, urlencoded} from 'express';
const app:Application = express()
import cors from 'cors';

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
   id: number;
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
  




    res.send('Hello World!')
  })


export default app;
