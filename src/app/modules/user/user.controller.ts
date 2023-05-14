import { NextFunction, Request, Response } from "express"
import { createUserToDB, getUserFromDB } from "./user.service"


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

export const createUser = async(req:Request, res:Response, next:NextFunction) => {
  try{
      const user = req.body;
      const users = await createUserToDB(user)
        res.status(200).json({
          status: "success",
          data: users
      })
    }catch(error){
      res.status(400).json({
          status: false,
          meassage: `could't found data`
      })
    }
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