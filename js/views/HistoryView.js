import KeywordView from './KeywordView.js'

const tag = '[HistoryView]'

const HistoryView = Object.create(KeywordView)

HistoryView.messages.NO_KEYWORDS = '검색 이력이 없습니다'

HistoryView.getKeywordListHtml = function(data) {
    return data.reduce((html, item) => {
        html += `<li data-keyword='${item.keyword}'>
        ${item.keyword}
        <span class="date">${item.date}</span>
        <button class="btn-reset"></button>
        </li>`
        return html
    }, '<ul class="list">') + '</ul>'
}

HistoryView.bindRemoveBtn = function() {
    Array.from(this.el.querySelectorAll('button.btn-reset')).forEach(btn => {
        btn.addEventListener('click', e => {
            // li 의 클릭 이벤트 막음
            e.stopPropagation()
            this.onRemoveHistory(e)
        })
    })
}

HistoryView.onRemoveHistory = function(e){
    const {keyword} = e.currentTarget.parentElement.dataset
    this.emit('@remove', {keyword})
}

export default HistoryView