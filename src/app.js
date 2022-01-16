import './style.scss'
import data from './data.json'
import {Note} from "./note";
import {Form} from "./form";

export const DATA = updateDate(data)

export function updateDate(data,newData){
    console.log(data)
    console.log(newData)
    console.log('------')
    if (newData === 'undefined') return data
    if (newData !== 'undefined') return data



    /*if (newData !== data){
        return newData
    }*/
}

const createBtn = document.querySelector('.notes__button__create')
const form = document.querySelector('.notes__add__form')


window.addEventListener('load', Note.onUpdateNoteList(DATA))

createBtn.addEventListener('click', (e) => {
    form.classList.toggle('show')
    e.target.innerHTML = form.classList.contains('show') ? 'Close ' : 'Create'
})

form.addEventListener('submit',Form.formHandler)


// Form.getNewDate()














// console.log(Note.getNoteList())



