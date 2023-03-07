import { Router } from 'express'
import controller from '../controllers/register.js'

const router = Router()

router.get('/register', controller.register)

export default router