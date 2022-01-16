import './style.scss'
import data from './data.json'
import {Note} from "./note";
import {Form} from "./form";

localStorage.setItem('notes',JSON.stringify(data))

export const DATA = JSON.parse(localStorage.getItem('notes'))


const createBtn = document.querySelector('.notes__button__create')
const form = document.querySelector('.notes__add__form')


// setTimeout(function (){
//     const deleteBtns = document.querySelectorAll('.notes__item__btn__delete')
//     deleteBtns.forEach(btn=>btn.addEventListener('click',()=>console.log('click')))
// }, 1000)

window.addEventListener('load', Note.onUpdateNoteList(JSON.parse(localStorage.getItem('notes'))))

createBtn.addEventListener('click', (e) => {
    form.classList.toggle('show')
    e.target.innerHTML = form.classList.contains('show') ? 'Close ' : 'Create'
})

form.addEventListener('submit',Form.formHandler)






