import express from 'express';
import controller from './controller'
const photoRoutes = express.Router();

photoRoutes.get('/',controller.convertAll)
photoRoutes.get('/:id')
photoRoutes.post('/')
photoRoutes.put('/:id')
photoRoutes.delete('/:id')


export default photoRoutes;