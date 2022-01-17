import {Note} from "./note";
import data from "./data.json";
import {Service} from "./service";
import {SumTable} from "./sumTable";

export class Form {

    static inputs = document.querySelectorAll('.notes__add__form input')
    static editFormInputs = document.querySelectorAll('.notes__edit__form input')
    static editForm = document.querySelector('.notes__edit__form')
    static newDate = null

    static formHandler(e) {
        console.log('formHandler')
        e.preventDefault()
        console.log('onInputSubmit')
        this.newDate = Form.addNote(Form.newNote(Form.inputs), Service.getDate())
        Service.updateDate(this.newDate)
        Note.onUpdateNoteList(Service.getDate())
        SumTable.createItem()

    }

    static onInput() {
        //for input valid
        this.inputs.forEach((input, i) => {
            input.addEventListener('input', this.onInputChange)
        })

    }

    static onInputChange(e) {
        // console.log(e.target.value)
    }

    static newNote(inputs) {
        const newNote = {}
        inputs.forEach((item, i) => {
            const itemKey = item.getAttribute('key')
            const name = item.getAttribute('name')
            newNote[name] = item.value
        })
        newNote['created'] = Service.getMonths() + ' ' + new Date().getDate() + ', ' + new Date().getFullYear()
        newNote['archive'] = false
        newNote['dates'] = '-'

        return newNote
    }

    static editNote(inputs, key) {

        const newNote = {}
        inputs.forEach((item, i) => {
            const name = item.getAttribute('name')
            newNote[name] = item.value
        })
        newNote['created'] = Service.getDate()[key].created
        newNote['archive'] = Service.getDate()[key].archive
        newNote['dates'] = `${Service.getDate()[key].created}; ${new Date().toLocaleDateString()}`


        return newNote
    }

    static addNote(newNote, data) {
        const processedData = data
        processedData.push(newNote)

        return processedData
    }

    static editFormHandler = (key) => (e) => {
        e.preventDefault()
        if (Service.getDate().length === 0) return

        const data = Service.getDate()
        data[+Note.activeEditKey] = Form.editNote(Form.editFormInputs, +Note.activeEditKey)
        Service.updateDate(data)

        Note.createNotes(data)
        Note.onBtn()
    }


}



