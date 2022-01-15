// import img from './assets/images/delete.png'
import editImg from './assets/images/edit.gif'
import deleteImg from './assets/images/delete.png'
import archiveImg from './assets/images/archive.png'
export class Note {

    static createNotes(data) {

        const notesWrap = document.createElement('div')
        notesWrap.classList.add('notes__wrap')

        data.forEach((item, i) => {

            const note = document.createElement('div')
            note.classList.add('notes__item')

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
                    <img src="${editImg}" alt="" class="notes__item__btn__edit">
                    <img src="${archiveImg}" alt="" class="notes__item__btn__archive">
                    <img src="${deleteImg}" alt="" class="notes__item__btn__delete"> 
            </div>  
        `
            notesWrap.append(note)
        })

        return notesWrap
    }

}

