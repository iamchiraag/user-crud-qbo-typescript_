import express, { Request, Response } from 'express'
import { CreateUser, DeleteUser, FindAndUpdate, findUser } from '../services/users.service'
import { authorizeUri, callback, refreshToken } from '../services/authentication.service'
import { ResponseStatus } from '../enum'
import { commonresponse } from '../models/commonresponse'

const createUser: any = async (req: Request, res: Response) => {
    let ObjResponse = new commonresponse();
    console.log(req.body)
    try {
        var addedUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            email: req.body.email,
            phone: req.body.phone,
            dept: req.body.dept,
        };
        console.log(req.body)
        ObjResponse.ResponseStatus = ResponseStatus.Success;
        ObjResponse.Message = "User Created Successful";
        ObjResponse.Result = await CreateUser(addedUser)

    } catch (error: any) {
        ObjResponse.ResponseStatus = ResponseStatus.Error;
        ObjResponse.Message = error.message;
    }
    res.send(ObjResponse);
}


const updateUser: any = async (req: Request, res: Response) => {
    let ObjResponse = new commonresponse();
    console.log(req.body)
    try {
        ObjResponse.ResponseStatus = ResponseStatus.Success;
        ObjResponse.Message = "User Updated Successful";
        ObjResponse.Result = await FindAndUpdate(req.body.query, req.body.change, { new: true })

    } catch (error: any) {
        ObjResponse.ResponseStatus = ResponseStatus.Error;
        ObjResponse.Message = error.message;
    }
    res.send(ObjResponse);
}

const getAllUser: any = async (req: Request, res: Response) => {
    let ObjResponse = new commonresponse();
    console.log(req.body)
    try {
        ObjResponse.ResponseStatus = ResponseStatus.Success;
        ObjResponse.Message = "All user get Successful";
        ObjResponse.Result = await findUser(req.body.query, req.body.change)

    } catch (error: any) {
        ObjResponse.ResponseStatus = ResponseStatus.Error;
        ObjResponse.Message = error.message;
    }
    res.send(ObjResponse);
}



const deleteUser: any = async (req: Request, res: Response) => {
    let ObjResponse = new commonresponse();
    console.log(req.query)
    try {
        ObjResponse.ResponseStatus = ResponseStatus.Success;
        ObjResponse.Message = "User Deleted Successful";
        ObjResponse.Result = await DeleteUser(req.query)

    } catch (error: any) {
        ObjResponse.ResponseStatus = ResponseStatus.Error;
        ObjResponse.Message = error.message;
    }
    res.send(ObjResponse);
}








const authorizeUrl: any = async (req: Request, res: Response) => {
    let ObjResponse = new commonresponse();
    try {
        ObjResponse.ResponseStatus = ResponseStatus.Success;
        ObjResponse.Message = "User Deleted Successful";
        ObjResponse.Result = await authorizeUri(req.body)

    } catch (error: any) {
        ObjResponse.ResponseStatus = ResponseStatus.Error;
        ObjResponse.Message = error.message;
    }
    res.send(ObjResponse);

}

const refreshTokenController: any = async (req: Request, res: Response) => {
    let ObjResponse = new commonresponse();
    try {
        ObjResponse.ResponseStatus = ResponseStatus.Success;
        ObjResponse.Message = "User Deleted Successful";
        ObjResponse.Result = await refreshToken()

    } catch (error: any) {
        ObjResponse.ResponseStatus = ResponseStatus.Error;
        ObjResponse.Message = error.message;
    }
    res.send(ObjResponse);

}

const callbackController: any = async (req: Request, res: Response) => {
    let ObjResponse = new commonresponse();
    try {
        ObjResponse.ResponseStatus = ResponseStatus.Success;
        ObjResponse.Message = "User Deleted Successful";
        ObjResponse.Result =await callback(req.url)

    } catch (error: any) {
        ObjResponse.ResponseStatus = ResponseStatus.Error;
        ObjResponse.Message = error.message;
    }
    res.send(ObjResponse);

}


export { createUser, updateUser, getAllUser, authorizeUrl, refreshTokenController, callbackController, deleteUser }


