export default {
  data: [
    { keyword: '검색기록2', date: '12.03'},
    { keyword: '검색기록1', date: '12.02'},
    { keyword: '검색기록0', date: '12.01'},
  ],

  list() {
    return Promise.resolve(this.data)
  },
  
  add(keyword = '') {
    keyword = keyword.trim()
    if (!keyword) return 

    // 기존에 있으면 삭제 후 새로운 날짜로 저장하게함
    if (this.data.some(item => item.keyword === keyword)) {
      this.remove(keyword)
    }
    const today = new Date()
    const month = today.getMonth() +1 
    const day = today.getDate();
    const date = `${month}.${day}`
    this.data = [{keyword, date}, ...this.data]
  },
  
  remove(keyword) {
    this.data = this.data.filter(item => item.keyword !== keyword)
  }
}