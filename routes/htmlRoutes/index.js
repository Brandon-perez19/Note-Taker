import express from "express";
//new way to import router with ESM
var router = express.Router();

//new way to use __dirname with esm as it's no longer supported as a global variable
import path from "path";
//fileUrlToPath is needed to get the specific route
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})

export default router