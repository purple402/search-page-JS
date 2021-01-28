import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'
import KeywordView from '../views/KeywordView.js'
import HistoryView from '../views/HistoryView.js'
import CategoryView from '../views/CategoryView.js'
import CategoryResultView from '../views/CategoryResultView.js'

import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js'
import HistoryModel from '../models/HistoryModel.js'

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

        HistoryView.setup(document.querySelector("#search-history"))
            .on('@click', e => this.onClickHistory(e.detail.keyword))
            .on('@remove', e => this.onRemoveHistory(e.detail.keyword))

        CategoryView.setup(document.querySelector('#categories'))
            .on('@check', e => this.onCheckCategory(e.detail.CATName))

        CategoryResultView.setup(document.querySelector('#category-result'))

        this.selectedTab = '추천 검색어'
        this.renderView()
    },
    renderView() {
        TabView.setActiveTab(this.selectedTab)

        if (this.selectedTab === '추천 검색어') {
            this.fetchSearchKeyword()
            HistoryView.hide()
        } else {
            this.fetchSearchHistory()
            KeywordView.hide()
        }

        ResultView.hide()
    },
    fetchSearchKeyword() {
        KeywordModel.list().then(data => {
            KeywordView.render(data)
        })
    },
    fetchSearchHistory() {
        HistoryModel.list().then(data => {
            HistoryView.render(data).bindRemoveBtn()
        })
    },
    search(query) {
        // data 받아옴
        SearchModel.list(query).then(data => {
            this.onSearchResult(data)
        })
        // 입력창에 단어가 입력될 수 있도록 FormView에 위임
        FormView.setValue(query)
        HistoryModel.add(query)
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
        HistoryView.hide()
        // 검색결과 구현
        ResultView.render(data)
    },
    changeTab(tabName) {
        this.selectedTab = tabName
        this.renderView()
    },
    onClickKeyword(keyword) {
        this.search(keyword)
    },
    onClickHistory(keyword) {
        this.search(keyword)
    },
    onRemoveHistory(keyword) {
        HistoryModel.remove(keyword)
        this.fetchSearchHistory()
    }
}