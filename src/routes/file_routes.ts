import {Router} from 'express';
import files from '../controllers/files'
const app = Router();

app.get('/data',files.getdata)
app.get('/file',files.getfiles)

export default app 