import express from 'express';
import controller from './user.controller'
const userRoutes = express.Router();

userRoutes.get('/',controller.getAll)
userRoutes.get('/:id')
userRoutes.post('/')
userRoutes.put('/:id')
userRoutes.delete('/:id')


export default userRoutes;