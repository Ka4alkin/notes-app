import './style.scss'
import {Note} from "./note";
import {data} from "./data";


window.addEventListener('load', onUpdateNoteList)

function onUpdateNoteList() {
    const notes = document.querySelector('.notes')
    notes.append(Note.createNotes(data))
}



// console.log(Note.getNoteList())



