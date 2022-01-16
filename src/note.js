// import img from './assets/images/delete.png'
import editImg from './assets/images/edit.gif'
import deleteImg from './assets/images/delete.png'
import archiveImg from './assets/images/archive.png'
import data from "./data.json";

export class Note {


    static onUpdateNoteList(data) {
        const notes = document.querySelector('.notes')
        notes.insertBefore(Note.createNotes(data), document.querySelector('.notes__button__wrap'))
        Note.onDeleteNote()
        return null
    }

    static createNotes(data) {

        this.clearNotes()


        const notesWrap = document.createElement('div')
        notesWrap.classList.add('notes__wrap')

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
                <div class="notes__item__dates">-datas-</div>
                <div class="notes__item__btn"> 
                    <img key="${i}" src="${editImg}" alt="" class="notes__item__btn__edit">
                    <img key="${i}" src="${archiveImg}" alt="" class="notes__item__btn__archive">
                    <img key="${i}" src="${deleteImg}" alt="" class="notes__item__btn__delete"> 
            </div>  
        `
            notesWrap.append(note)

        })

        return notesWrap
    }


    static clearNotes() {

        const notes = document.querySelector('.notes')
        const items = document.querySelectorAll('.notes__item')
        const notesWrap = document.querySelector('.notes__wrap')

        if (notesWrap && items) {
            items.forEach((item, i) => {
                notesWrap.removeChild(item)
            })
            notes.removeChild(notesWrap)
        }
    }


    static onDeleteNote() {

        console.log('onDeleteNote')

        const deleteBtns = document.querySelectorAll('.notes__item__btn__delete')

        deleteBtns.forEach(btn => btn.addEventListener('click', (e) => {
            const itemKey = e.target.getAttribute('key')
            const data = JSON.parse(localStorage.getItem('notes'))
            data.forEach((item, i) => {
                console.log('onDeleteNote')
                data.splice(itemKey, 1);
            })
            localStorage.setItem('notes',JSON.stringify(data))
            Note.onUpdateNoteList(JSON.parse(localStorage.getItem('notes')))
        }))
    }

}

