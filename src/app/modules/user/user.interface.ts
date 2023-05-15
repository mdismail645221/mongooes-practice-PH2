import { HydratedDocument, Model } from "mongoose";

  // step1:  creating interface 
  export interface IUser {
    id: string;
    role: string,
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


  //  class static interface method 
  // interface IuserModel extends Model<IUser>  {
  //     addminUser(): IUser[]
  // }


  //  interface method 
   export interface IUserMethods {
     fullName(): string;
   }


 export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }