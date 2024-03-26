import {Router} from 'express'
import user from '../controllers/user'
const app=Router()

app.post('/register',user.register)
app.post('/login',user.login)

export default app