import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import loginRoutes from './routes/login/routes'

const app = express()

const PORT = 3002

app.use(cors())
app.use(bodyParser.json())
app.use(loginRoutes)

app.listen(PORT, () => console.log('Server running!'))
