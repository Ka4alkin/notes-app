import {Service} from "./service";

export class SumTable {

    static getCategories() {
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        const data = Service.getDate()
            .map(item => item.category)
            .filter(onlyUnique)

        const categoriesOb = []

        data.forEach((category, i) => {

            const archived = Service.getDate()
                .filter(item => item.category === category)
                .reduce((total, item) => {
                    if (item.archive === true) {
                        return total + 1
                    }
                    return total
                }, 0)

            const active = Service.getDate()
                .filter(item => item.category === category)
                .reduce((total, item) => {
                    if (item.archive === false) {
                        return total + 1
                    }
                    return total
                }, 0)

            const ob = {
                category: category,
                active,
                archived
            }
            categoriesOb.push(ob)
        })


        return categoriesOb

    }

    static createItem() {
        if (Service.getDate().length === 0) return

        const mainWrap = document.querySelector('.notes__sum-wrap')
        const forClearItems = document.querySelectorAll('.notes__sum-wrap .notes__sum-wrap-item')
        if (forClearItems) {
            forClearItems.forEach((item, i) => {
                item.remove()
            })
        }
        const itemWrap = document.createElement('div')
        itemWrap.classList.add('notes__sum-wrap-item')

        SumTable.getCategories().forEach((category, i) => {

            const item = document.createElement('div')
            item.classList.add('notes__sum-wrap-item')

            item.innerHTML = `
                 <div class="notes__sum-wrap-item__item">${category.category}</div>
                 <div class="notes__sum-wrap-item__item">${category.active}</div>
                 <div class="notes__sum-wrap-item__item">${category.archived}</div>
            `
            mainWrap.append(item)
        })
    }
}

