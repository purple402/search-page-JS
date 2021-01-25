import View from './View.js'

const tag = '[KeywordView]'

const KeywordView = Object.create(View)

KeywordView.setup = function(el) {
    this.init(el)
    return this
}

KeywordView.render = function(data = []) {
    this.el.innerHTML = data.length ? this.getKeywordListHtml(data) : '추천 검색어가 없습니다'
    this.show()
}

KeywordView.getKeywordListHtml = function(data) {
    return data.reduce((html, item, index) => {
        html += `<li data-keyword='${item.keyword}'>
        <span class='number'>${index + 1}</span>
        ${item.keyword}
        </li>`
        return html
    }, '<ul>') + '</ul>'
}

}

export default KeywordView