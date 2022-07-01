//need to write to file
import fs from 'fs';
import uniqid from 'uniqid'
import notes from '../db/db.json' assert {type: "json"};

//needed to find path
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createNewNote(body) {
    const ID = uniqid();
    const note = body
    const createNote = {
        "title": body.title,
        "text": body.text,
        "id": ID
    }
    notes.push(createNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );

    return note
}

function validateNote(note) {
    if (!note.title || !note.text) {
        return false;
    }
    return true;
};

export { validateNote, createNewNote };