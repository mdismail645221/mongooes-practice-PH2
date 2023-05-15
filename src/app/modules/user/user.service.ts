import { IUser } from "./user.interface";
import User from "./user.model"

 //asyn fucntion

  export const getUserFromDB = async ():Promise<IUser[]>=> {
    const users = await User.find();
    return  users
  }

  // FindOne Api Method 
export const getUserByIdFromDB = async (playload: string):Promise<IUser | null> => {
  const userId = await User.findOne({id: playload}, {name : 1, presentAddress: 1})
  return userId
}

  export const createUserToDB =async (playload:IUser):Promise<IUser> => {
    console.log({playload})
    const user = new User(playload);
    console.log(user.fullName())
    const result = await user.save();
    // console.log({result})
    return result;
  }

  
  export const getAdminUserFromToDB = async() => {
    const admins = await User.getAdminUsers();
    return admins;
  }

