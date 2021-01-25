import View from './View.js'

const tag = '[HistoryView]'

const HistoryView = Object.create(View)

HistoryView.setup = function(el) {
    this.init(el)
    return this
}

HistoryView.render = function(data = []) {
    this.el.innerHTML = data.length ? this.getHistoryListHtml(data) : '최근 검색어가 없습니다'
    // setup에서 bindClickEvent를 하면 DOM이 만들어지기 이전이므로 eventlistener가 연결되지 않는다
    this.bindClickEvent()
    this.show()
}

HistoryView.getHistoryListHtml = function(data) {
    return data.reduce((html, item) => {
        html += `<li data-keyword='${item.keyword}'>
        ${item.keyword}
        <span class="date">${item.date}</span>
        </li>`
        return html
    }, '<ul class="list">') + '</ul>'
}

HistoryView.bindClickEvent = function() {
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        li.addEventListener('click', e => this.onClickHistory(e))
    })
}

HistoryView.onClickHistory = function(e) {
    const {keyword} = e.currentTarget.dataset
    this.emit('@click', {keyword})
}

export default HistoryView