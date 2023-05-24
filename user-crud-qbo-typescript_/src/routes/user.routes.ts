import express, { Request, Response } from 'express'
import { authorizeUrl, callbackController, createUser, getAllUser, refreshTokenController, updateUser,deleteUser } from '../controller/user.controller'
import {  } from '../services/users.service'

const userRoute = express.Router()

userRoute.post('/create', createUser)
userRoute.post('/update', updateUser)
userRoute.get('/get', getAllUser)
userRoute.delete('/delete', deleteUser)
userRoute.post('/authurl', authorizeUrl)
userRoute.get('/refreshAccessToken', refreshTokenController)
userRoute.get('/callback', callbackController)

export { userRoute }
