import { Router } from 'express';

import { UserController } from './Controllers/Users';

const User = new UserController();

const router = Router();

router.get('/users', User.ListUsers)
router.post('/users', User.create)
router.post('/login', User.login)

export { router }
