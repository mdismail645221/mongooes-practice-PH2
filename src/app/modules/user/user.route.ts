import express from 'express';
import { createUser, getUsers } from './user.controller';

const router = express.Router();

router.get('/', getUsers)
router.post('/createUser', createUser)

export default router