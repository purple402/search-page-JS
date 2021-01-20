export default {
  data: [
    {keyword: '심플'}, 
    {keyword: '6공'}, 
    {keyword: '스터디플래너'}, 
    {keyword: '제본'}
  ],

  list() {
    return new Promise(res => {
      setTimeout(() => {
        res(this.data)
      }, 200)
    })
  }
}
