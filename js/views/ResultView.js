import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)

ResultView.message = {
    NO_RESULT: '검색 결과가 없습니다'
}

ResultView.setup = function(el) {
    this.init(el)
    return this
}

ResultView.render = function(data = []) {
    console.log(tag, 'render()')
    this.el.innerHTML = data.length ? this.getSearchResultHtml(data) : this.message.NO_RESULT
    this.show()
}

ResultView.getSearchResultHtml = function(data) {
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item)
        return html
    }, '<ul>') + '</ul>'
}

ResultView.getSearchItemHtml = function(item) {
    console.log(tag, 'getSearchItemHtml()')
    return `<li>
    <img src='${item.image}'>
    <div>
    <span>${item.name}</span>
    <span>${item.brand}</span>
    </div>
    </li>`
}


export default ResultView