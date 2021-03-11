import * as express from 'express'
import * as cookieParser from 'cookie-parser'
import * as logger from 'morgan'

import indexRouter from './routes'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)

module.exports = app
