import { AppDataSource } from "./data-source"
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth'

const app = express()
const origin = 'http://localhost:3000'

app.use(express.json())
app.use(morgan("dev"))
app.use(cors({origin,credentials:true}))

dotenv.config( )
app.get('/',(_,res)=>res.send('running!'))
app.use('/api/auth',authRoutes)

let PORT = 4000
app.listen(PORT,async ()=>{
    console.log(`Server running at http://localhost:${PORT}`)

    AppDataSource.initialize().then(() => {

        console.log("database initialized...")

    }).catch(error => console.log(error))
})