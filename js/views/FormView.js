import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
    this.init(el)
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset]')
    this.showResetBtn(false)
    this.bindEvents()
    return this
}

FormView.showResetBtn = function(show = true) {
    this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function() {
    // submit 기본 동작 막기
    this.on('submit', e => e.preventDefault())
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
    this.resetEl.addEventListener('click', e => this.onClickReset())
}

FormView.onKeyup = function(e) {
    const enter = 13
    // true대신 입력값의 length를 넣어 아무것도 입력되지 않았을 때 버튼 사라지도록 함
    // + MainController가 onResetForm 실행하도록 emit
    this.showResetBtn(this.inputEl.value.length)
    if (!this.inputEl.value.length) this.emit('@reset')
    if (e.keyCode !== enter) return
    // 엔터 눌렀을 때
    this.emit('@submit', {input: this.inputEl.value})
}

FormView.onClickReset = function() {
    this.emit('@reset')
    this.showResetBtn(false)
}

export default FormView