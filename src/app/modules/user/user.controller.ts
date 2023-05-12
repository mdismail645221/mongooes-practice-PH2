import { NextFunction, Request, Response } from "express"
import { createUserToDB } from "./user.service"

export const createUser = async(req:Request, res:Response, next:NextFunction) => {
    // interesting a test data 
    /**
     * Step1 : interface তৈরি করবো। 
     * Step2 : Schema তৈরি করবো। 
     * Step3 : Model তৈরি করবো ।
     * Step : Data query করবো। 
     */
    const user = await createUserToDB()
    res.status(200).json({
        status: "success",
        data: user
     })
  }

/**
 * route.ts ---> controller.ts ---> service.ts
 */