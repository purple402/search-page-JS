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
    // this.el.innerHTML = data.length ? this.getSearchResultHtml(data) : `<span class="noResult"> ${this.message.NO_RESULT} </span>`
    this.el.innerHTML = data.length ? this.shuffleData(data) : `<span class="noResult"> ${this.message.NO_RESULT} </span>`
    this.show()
}

ResultView.shuffleData = function(data) {
    // 리스트 무작위 출력
    for (let i = data.length -1 ; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
    }
    return this.getSearchResultHtml(data)
}

ResultView.getSearchResultHtml = function(data) {
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item)
        return html
    }, '<ul>') + '</ul>'
}

ResultView.getSearchItemHtml = function(item) {
    return `<li>
    <img src='${item.image}'>
    <div>
    <span>${item.name}</span>
    <span>${item.brand}</span>
    </div>
    </li>`
}


export default ResultView