import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import principalRouting from './routes/index'

var app = principalRouting(express)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

export default app
