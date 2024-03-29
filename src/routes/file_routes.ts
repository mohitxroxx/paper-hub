import {Router} from 'express';
import files from '../controllers/files'
const app = Router();

app.get('/allfiles',files.allfiles)
app.post('/addfiles',files.addfiles)

export default app 