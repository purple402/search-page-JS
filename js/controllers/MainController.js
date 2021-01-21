import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'

import SearchModel from '../models/SearchModel.js'

const tag = '[MainController]'

export default {
    init() {
        FormView.setup(document.querySelector('form'))
            .on('@submit', e => this.onSubmit(e.detail.input))
            .on('@reset', e => this.onResetForm())

        ResultView.setup(document.querySelector('#search-result'))
    },
    search(query) {
        //data 받아옴
        SearchModel.list(query).then(data => {
            this.onSearchResult(data)
        })
    },
    onSubmit(input) {
        // 검색요청
        console.log(tag, 'onSubmit()', input)
        this.search(input)
    },
    onResetForm() {
        console.log(tag, 'onResetForm()')
        ResultView.hide()
    },
    onSearchResult(data) {
        // 검색결과 구현
        ResultView.render(data)
    }
}