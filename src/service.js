

export class Service {

    static updateDate(data) {
        localStorage.setItem('notes',JSON.stringify(data))
    }

    static getDate() {
       return   JSON.parse(localStorage.getItem('notes'))
    }
    


}
