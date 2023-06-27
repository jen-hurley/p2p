import { join } from 'node:path'
import express from 'express'
import patternRoutes from './routes/pattern'
const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.use('/api/v1/pattern', patternRoutes)

export default server
