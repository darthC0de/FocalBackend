import { Router, Request, Response } from 'express';

import { UserController } from './Controllers/Users';

const User = new UserController();

const router = Router();


router.get('/', (req: Request, res: Response)=>{
    return res.status(200).json("Healthcheck ok")
})

router.get('/users', User.ListUsers)
router.post('/users', User.create)
router.post('/login', User.login)

export { router }
