import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'
import KeywordView from '../views/KeywordView.js'

import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js'

const tag = '[MainController]'

export default {
    init() {
        FormView.setup(document.querySelector('form'))
            .on('@submit', e => this.onSubmit(e.detail.input))
            .on('@reset', e => this.onResetForm())

        ResultView.setup(document.querySelector('#search-result'))
        
        TabView.setup(document.querySelector('#tabs'))
            .on('@change', e => this.changeTab(e.detail.tabName))

        KeywordView.setup(document.querySelector('#search-keyword'))
            .on('@click', e => this.onClickKeyword(e.detail.keyword))

        this.selectedTab = '추천 검색어'
        this.renderView()
    },
    renderView() {
        TabView.setActiveTab(this.selectedTab)

        if (this.selectedTab === '추천 검색어') {
            this.fetchSearchKeyword()
        } else {

        }

        ResultView.hide()
    },
    fetchSearchKeyword() {
        KeywordModel.list().then(data => {
            KeywordView.render(data)
        })
    },
    search(query) {
        // data 받아옴
        SearchModel.list(query).then(data => {
            this.onSearchResult(data)
        })
        // 입력창에 단어가 입력될 수 있도록 FormView에 위임
        FormView.setValue(query)
    },
    onSubmit(input) {
        // 검색요청
        console.log(tag, 'onSubmit()', input)
        this.search(input)
    },
    onResetForm() {
        console.log(tag, 'onResetForm()')
        this.renderView()
    },
    onSearchResult(data) {
        TabView.hide()
        KeywordView.hide()
        // 검색결과 구현
        ResultView.render(data)
    },
    changeTab(tabName) {
        this.selectedTab = tabName
        this.renderView()
    },
    onClickKeyword(keyword) {
        this.search(keyword)
    }
}