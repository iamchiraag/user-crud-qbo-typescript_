import express from 'express'
import { userRoute } from './user.routes'
const router = express();

router.use('/user', userRoute)
// router.use('/user',userRoute)

export { router }
