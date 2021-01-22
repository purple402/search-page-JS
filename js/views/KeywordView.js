import View from './View.js'

const tag = '[KeywordView]'

const KeywordView = Object.create(View)

KeywordView.setup = function(el) {
    this.init(el)
    return this
}

KeywordView.render = function(data = []) {
    this.el.innerHTML = this.getKeywordListHtml(data)
}

KeywordView.getKeywordListHtml = function(data) {
    return data.reduce((html, item, index) => {
        html += this.getKeywordItemHtml(item, index)
        return html
    }, '<ul>') + '</ul>'
}

KeywordView.getKeywordItemHtml = function (item, index) {
    return `<li>
    <span class='number'>${index + 1}</span>
    ${item.keyword}
    </li>`
}

export default KeywordView