import {addNote, updateDate} from "./app";
import data from './data.json'

export class Form {

    static inputs = document.querySelectorAll('.notes__add__form input')

    static newDate = null

    static formHandler(e) {
        e.preventDefault()
        console.log('onInputSubmit')
        this.newDate =  Form.addNote(Form.getInputsValues(), data)
        updateDate(data,this.newDate)
    }

    static onInput() {

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
        newNote['data'] = new Date().toLocaleDateString()

        return newNote
    }

    static addNote(newNote, data) {
        const processedData = data
        processedData.push(newNote)

        return processedData
    }

    /*static getNewDate() {
        console.log(this.newDate)
    }*/

}


