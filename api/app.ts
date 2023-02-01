import express from 'express'
import { config } from '../config/global.config'
import userRoutes from './components/user/user.route'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : true}))

app.use('api/user',userRoutes)
app.listen(config.port,()=>{
    
})