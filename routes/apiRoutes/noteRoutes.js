import { validateNote, createNewNote} from '../../lib/notes.js'
import express from 'express'
import notes from "../../db/db.json" assert {type: "json"};
var router = express.Router();

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    if (!validateNote(req.body)) {
        res.status(400).send('The Note is not properly filled out.')
    } else {
        const note = createNewNote(req.body, notes)
        res.json(note)
    }
})

router.delete('/notes/:id', (req, res) => {
    let deleteId = req.params.id;
    let deleteObj = notes.find(note => note.id == deleteId);

    //Find the index of the object fetched from the JSON array.
    let deleteIndex = notes.indexOf(deleteObj);

    // Splice/ remove the object from the JSON Array.
    notes.splice(deleteIndex, 1);

    res.send(deleteObj); // Send the deleted object as response.
});

export default router;