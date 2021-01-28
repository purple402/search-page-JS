import View from './View.js'

const tag = '[CategoryView]'

const CategoryView = Object.create(View)

CategoryView.setup = function(el) {
    this.init(el)
    this.bindCheckList()
    return this
}

CategoryView.bindCheckList = function() {
    Array.from(this.el.querySelectorAll('input')).forEach(list => {
        list.addEventListener('change', e => {
            this.onCheckCAT(e)
        })
    })
}

CategoryView.onCheckCAT = function(e) {
    const CATName = e.currentTarget.id
    this.emit('@check', {CATName})
}

export default CategoryView