//need to write to file
import fs from 'fs';

//needed to find path
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function retreiveID (ID, notesArray){
    const result = notesArray.filter( note => note.id === ID);
    return result
};

function createNewNote (body, notes){
    console.log('creating new note!')
    const note = body
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notes}, null, 2)
    );
    return note
}

function validateNote(note) {
    if(!note.title || !note.text){
        return false;
    }
    return true;
};

export {validateNote, createNewNote, retreiveID};