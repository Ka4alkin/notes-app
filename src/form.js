
import {Note} from "./note";
import data from "./data.json";
import {Service} from "./service";

export class Form {

    static inputs = document.querySelectorAll('.notes__add__form input')

    static newDate = null

    static formHandler(e) {
        e.preventDefault()
        console.log('onInputSubmit')
        this.newDate =  Form.addNote(Form.getInputsValues(), Service.getDate())
        Service.updateDate(this.newDate)
        Note.onUpdateNoteList(Service.getDate())

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

    static getInputsValues() {
        const newNote = {}
        this.inputs.forEach((item, i) => {
            const name = item.getAttribute('name')
            newNote[name] = item.value
        })
        newNote['created'] = new Date().toLocaleDateString()
        newNote['archive'] = false

        return newNote
    }

    static addNote(newNote, data) {
        const processedData = data
        processedData.push(newNote)

        return processedData
    }


}



