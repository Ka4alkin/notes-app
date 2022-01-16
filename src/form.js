
import {Note} from "./note";
import data from "./data.json";

export class Form {

    static inputs = document.querySelectorAll('.notes__add__form input')

    static newDate = null

    static formHandler(e) {
        e.preventDefault()
        console.log('onInputSubmit')
        this.newDate =  Form.addNote(Form.getInputsValues(), JSON.parse(localStorage.getItem('notes')))
        localStorage.setItem('notes',JSON.stringify(this.newDate))
        Note.onUpdateNoteList(JSON.parse(localStorage.getItem('notes')))

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

        return newNote
    }

    static addNote(newNote, data) {
        const processedData = data
        processedData.push(newNote)

        return processedData
    }


}



