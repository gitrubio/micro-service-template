import express from 'express'
import { config } from '../config/global.config'
import userRoutes from './components/user/user.route'

const app = express()
//midellware
app.use(express.json())
app.use(express.urlencoded({ extended : true}))

app.use('api/user',userRoutes)
app.listen(config.port,()=>{
    console.log(`servidor corriendo en puerto [ ${config.port} ]`)
})