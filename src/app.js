import './style.scss'
import data from './data.json'
import {Note} from "./note";
import {Service} from "./service";
import {Form} from "./form";

Service.updateDate(data)

export const DATA = Service.getDate()


const createBtn = document.querySelector('.notes__button__create')
const archiveBtn = document.querySelector('.notes__button__archive')
const archive = document.querySelector('.notes__archive')
const form = document.querySelector('.notes__add__form')


window.addEventListener('load', Note.onUpdateNoteList(Service.getDate()))

createBtn.addEventListener('click', (e) => {
    form.classList.toggle('show')
    e.target.innerHTML = form.classList.contains('show') ? 'Close add new Note ' : 'Create new Note'
})
archiveBtn.addEventListener('click', (e) => {
    archive.classList.toggle('show')
    e.target.innerHTML = archive.classList.contains('show') ? 'Close archived notes ' : 'Open archived notes'
})

Note.editForm.addEventListener('submit', Form.editFormHandler());

form.addEventListener('submit',Form.formHandler)






