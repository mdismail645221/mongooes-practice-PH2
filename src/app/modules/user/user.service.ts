import { IUser } from "./user.interface";
import User from "./user.model"

 //asyn fucntion
 export const createUserToDB =async (playload:IUser):Promise<IUser> => {
    const user = new User(playload)
    await user.save()
    return user;
  }

  export const getUserFromDB = async ()=> {
    const users = await User.find();
    return  users
  }