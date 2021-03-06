// import img from './assets/images/delete.png'
import editImg from './assets/images/edit.gif'
import deleteImg from './assets/images/delete.png'
import archiveImg from './assets/images/archive.png'
import {Service} from "./service";
import {Form} from "./form";
import {SumTable} from "./sumTable";

export class Note {

    static notes = document.querySelector('.notes')
    static notesButtonsWrap = document.querySelector('.notes__button__wrap')
    static notesArchive = document.querySelector('.notes__archive')
    static notesWrap = document.querySelector('.notes__wrap')
    static editForm = document.querySelector('.notes__edit__form')
    static editFormInputs = document.querySelectorAll('.notes__edit__form input')
    // static closeEditFormBtn = document.querySelector('.notes__edit__form button .active')
    static activeEditKey


    static onUpdateNoteList(data) {

        Note.createNotes(data)
        Note.onBtn()

        return null
    }

    static createNotes(data) {

        if (document.querySelector('.error')) {
            document.querySelector('.error').remove()
        }

        this.clearNotes()

        // const notesWrap = document.createElement('div')
        // notesWrap.classList.add('notes__wrap')

        data.forEach((item, i) => {

            const note = document.createElement('div')
            note.classList.add('notes__item')
            note.setAttribute('key', i)

            note.innerHTML += ` 
                <div class="notes__item__name"> 
                    <!--<img class="notes__item__name__ico" src="" alt="">-->
                    ${item.name}
                </div>
                <div class="notes__item__date-created">${item.created}</div>
                <div class="notes__item__category">${item.category}</div>
                <div class="notes__item__content">${item.content}</div>
                <div class="notes__item__dates">${item.dates}</div>
                <div class="notes__item__btn"> 
                    <img key="${i}" src="${editImg}" alt="" class="notes__item__btn__edit">
                    <img key="${i}" src="${archiveImg}" alt="" class="notes__item__btn__archive">
                    <img key="${i}" src="${deleteImg}" alt="" class="notes__item__btn__delete"> 
            </div>  
        `
            if (item.archive !== true) {
                Note.notesWrap.append(note)
            } else {
                Note.notesArchive.append(note)
            }
        })
    }


    static clearNotes() {

        const notes = document.querySelectorAll('.notes__item')

        notes.forEach(item => {
            if (item) item.remove()
        })

    }

    static onBtn() {
        const archiveBtns = document.querySelectorAll('.notes__item__btn__archive')
        const deleteBtns = document.querySelectorAll('.notes__item__btn__delete')
        const editBtns = document.querySelectorAll('.notes__item__btn__edit')

        archiveBtns.forEach(btn => btn.addEventListener('click', this.onArchive))
        deleteBtns.forEach(btn => btn.addEventListener('click', this.onDelete))
        editBtns.forEach(btn => btn.addEventListener('click', this.onEdit))
    }

    static onDelete(e) {
        const itemKey = e.target.getAttribute('key')
        const data = Service.getDate()
        data.splice(itemKey, 1)
        Service.updateDate(data)
        Note.onUpdateNoteList(Service.getDate())
        Note.Error()
        SumTable.createItem()

        //?????? ???????????????? ???????? ?????????????? ?????????????? ?? ???????????? ???? ?????? ??????????????
        //?????????? ????????????????????
        Note.editForm.classList.remove('show')
    }


    static onEdit(e) {

        const itemKey = e.target.getAttribute('key')

        const spanNum = document.querySelector('.notes__edit__form h5 span')
        spanNum.innerHTML = Service.getDate()[itemKey].name
        Note.editForm.classList.add('show')

        console.log(e.target)
        Note.editFormInputs.forEach((item, i) => {
            const name = item.getAttribute('name')
            item.value = Service.getDate()[itemKey][name]
        })

        Note.activeEditKey = itemKey

    }

    static onArchive(e) {

        const itemKey = e.target.getAttribute('key')
        console.log('onArchive')

        const data = Service.getDate()

        if (data[itemKey].archive === false) {
            data[itemKey].archive = true
        } else {
            data[itemKey].archive = false
        }

        //update notes
        Service.updateDate(data)
        Note.createNotes(data)
        Note.onBtn()
        SumTable.createItem()
    }

    static Error() {
        console.log(Service.getDate().length)
        if (Service.getDate().length === 0) {
            const error = document.createElement('div')
            error.classList.add('error')
            error.innerHTML = `
                <h1 style="color: red; font-size: 75px">No notes yet! Please make new!</h1>
                `
            Note.notesWrap.append(error)
        }
    }

    static valid() {
        if (Service.getDate().length === 0)
            return false
    }

}




