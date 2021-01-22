import View from './View.js'

const tag = '[TabView]'

const TabView = Object.create(View)

TabView.tabName = {
    recommend: '추천 검색어',
    recent: '최근 검색어' 
}

TabView.setup = function(el) {
    this.init(el)
    this.bindEvent()
    return this
}

TabView.setActiveTab = function(tabName) {
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        li.className = li.innerHTML === tabName ? 'active' : ''
    })
}

TabView.bindEvent = function() {
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        li.addEventListener('click', e => this.selectTab(e.target.innerHTML))
    })
}

TabView.selectTab = function (tabName) {
    this.emit('@change', { tabName })
}

export default TabView