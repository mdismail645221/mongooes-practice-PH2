import express from 'express';
import { createUser, getAdminUser, getUserById, getUsers } from './user.controller';

const router = express.Router();

router.get('/', getUsers);
router.get('/admin', getAdminUser);
router.get('/:id', getUserById);
router.post('/createUser', createUser);

export default router;