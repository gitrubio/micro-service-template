import express from 'express'
import { config } from '../config/app.config'
import userRoutes from './components/user/user.route'
import morgan from 'morgan'

const app = express()
/****midellware****/
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(morgan('dev'))
//*******/
app.use('/api/user',userRoutes)
app.listen(config.port,()=>{
    console.log(`servidor corriendo en puerto [ ${config.port} ]`)
})