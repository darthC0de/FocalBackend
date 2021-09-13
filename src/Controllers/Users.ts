import { Request, Response } from 'express';
import { iUser, User } from '../Services/User';

interface CustomError{
    status: number;
    error: Error | string;
}

class UserController{
    async ListUsers(req: Request, res: Response){
        const user = new User();
        await user.listAll()
            .then((response: any)=>{
                return res.status(200).json(response)
            })
            .catch((error: CustomError)=>{
                return res.status(error.status).json({error:error.error})
            })
    }
    async create(req: Request, res: Response){
        const user = new User();
        await user.create(req.body)
            .then(response=>{
                return res.status(201).json(response)
            })
            .catch((error: CustomError)=>{
                return res.status(error.status).json({error:error.error})
            })
    }
    async login(req: Request, res: Response){
        const user = new User();
        await user.authenticate(req.body)
            .then((response: any)=>{
                return res.status(200).json(response)
            })
            .catch((error: CustomError)=>{
                return res.status(error.status).json({error:error.error})
            })
    }
}
export {
    UserController
}