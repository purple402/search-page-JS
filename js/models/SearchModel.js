const data = [
  {
    id: 1,
    name: '2021 마이 버디 01-03 (날짜형)',
    brand: 'DAILYLIKE',
    image: 'http://thumbnail.10x10.co.kr/webimage/image/basic600/326/B003268412.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false'
  },
  {
    id: 2,
    name: '[Peanuts] 스터디 플래너 (4종)',
    brand: 'PEANUTS',
    image: 'http://thumbnail.10x10.co.kr/webimage/image/basic600/292/B002927222-4.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false'
  }
]

export default {
  list(query) {
    return new Promise(resolve => {
      setTimeout(()=> {
        const keyword = query.trim()
        const result = []
        data.forEach(item => {
          if (item.name.includes(keyword)) {
            result.push(item)
          }
        })
        resolve(result)
      }, 200);
    })
  }
}