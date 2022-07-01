import {validateNote, createNewNote, retreiveID} from '../../lib/notes.js'
import express from 'express'
import notes from "../../db/db.json" assert {type: "json"};
var router = express.Router();

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    if(!validateNote(req.body)) {
        res.status(400).send('The Note is not properly filled out.')
    } else {
        console.log('api called creating new note')
        console.log(req.body, notes)
        const note = createNewNote(req.body, notes)
        res.json(note)
    }
})

export default router;