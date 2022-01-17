import './style.scss'
import data from './data.json'
import {Note} from "./note";
import {Service} from "./service";
import {Form} from "./form";
import {SumTable} from "./sumTable";

Service.updateDate(data)

export const DATA = Service.getDate()
SumTable.createItem()


const createBtn = document.querySelector('.notes__button__create')
const archiveBtn = document.querySelector('.notes__button__archive')
const archive = document.querySelector('.notes__archive')
const btnCloseEditForm = document.querySelector('.button-close-edit')
const form = document.querySelector('.notes__add__form')


window.addEventListener('load', Note.onUpdateNoteList(Service.getDate()))

createBtn.addEventListener('click', (e) => {
    form.classList.toggle('show')
    e.target.classList.toggle('active')
    e.target.innerHTML = form.classList.contains('show') ? 'Close add new Note ' : 'Create new Note'
})
archiveBtn.addEventListener('click', (e) => {
    archive.classList.toggle('show')
    e.target.classList.toggle('active')
    e.target.innerHTML = archive.classList.contains('show') ? 'Close archived notes ' : 'Open archived notes'
})

btnCloseEditForm.addEventListener('click', (e) => {
    Note.editForm.classList.remove('show')
})


Note.editForm.addEventListener('submit', Form.editFormHandler());


form.addEventListener('submit', Form.formHandler)











