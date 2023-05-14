import { NextFunction, Request, Response } from "express"
import { createUserToDB, getUserByIdFromDB, getUserFromDB } from "./user.service"
import { IUser } from "./user.interface"


export const getUsers = async (req:Request, res:Response) => {
    try {
        const user = await getUserFromDB()
        res.status(200).json({
          status: 'success',
          data: user,
        })
    } catch (error) {
      res.status(400).json({
        status: false,
        message: `Could't Found`,
      })
    }
}

// Findone API Method 
export const getUserById = async (req:Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params;
    console.log(id)
    const user = await getUserByIdFromDB(id)
    res.status(200).json({
      status: 'success',
      data: user,
    })
  } catch (error) {
    res.status(400).json({
      status: false,
      message: `Could't Found`,
    })
  }
}

export const createUser = async(req:Request, res:Response, next:NextFunction) => {
      const user = req.body;
      const users = await createUserToDB(user)
      console.log({users})
        res.status(200).json({
          status: "success",
          data: users
      })
}



 // interesting a test data 
    /**
     * Step1 : interface তৈরি করবো। 
     * Step2 : Schema তৈরি করবো। 
     * Step3 : Model তৈরি করবো ।
     * Step : Data query করবো। 
     */

/**
 * route.ts ---> controller.ts ---> service.ts
 */