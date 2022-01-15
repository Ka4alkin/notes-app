import './style.scss'
import data from './data.json'
import {Note} from "./note";
import {Form} from "./form";

const DATA = data


const createBtn = document.querySelector('.notes__button__create')
const form = document.querySelector('.notes__add__form')


window.addEventListener('load', Note.onUpdateNoteList(DATA))

createBtn.addEventListener('click', (e) => {
    form.classList.toggle('show')
    e.target.innerHTML = form.classList.contains('show') ? 'Close ' : 'Create'
})

form.addEventListener('submit',Form.formHandler)









// console.log(Note.getNoteList())



