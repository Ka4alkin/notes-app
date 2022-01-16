import './style.scss'
import data from './data.json'
import {Note} from "./note";
import {Form} from "./form";

localStorage.setItem('notes',JSON.stringify(data))

export const DATA = JSON.parse(localStorage.getItem('notes'))


const createBtn = document.querySelector('.notes__button__create')
const form = document.querySelector('.notes__add__form')

window.addEventListener('load', Note.onUpdateNoteList(JSON.parse(localStorage.getItem('notes'))))

createBtn.addEventListener('click', (e) => {
    form.classList.toggle('show')
    e.target.innerHTML = form.classList.contains('show') ? 'Close ' : 'Create'
})

form.addEventListener('submit',Form.formHandler)






