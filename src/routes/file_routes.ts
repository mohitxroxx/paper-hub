import {Router} from 'express';
import files from '../controllers/files'
const app = Router();

app.get('/filter',files.viewfiles)
app.post('/addfiles',files.addfiles)

export default app 