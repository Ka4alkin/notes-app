export class Service {

    static updateDate(data) {
        localStorage.setItem('notes', JSON.stringify(data))
    }

    static getDate() {
        return JSON.parse(localStorage.getItem('notes'))
    }

    static getMonths() {

        const arrMonths = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'November',
            'December',
        ];

        return arrMonths[new Date().getMonth()]
    }
}

Service.getMonths()