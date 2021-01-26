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
  },
  {
    id: 3,
    name: '라이프앤피시스 유어플래너 L 3 color',
    brand: 'LIVEWORK',
    image: 'http://livework.net/web/product/extra/big/202011/d48993351ce5f62812e0fd182eab98eb.jpg',
  },
  {
    id: 4,
    name: '리틀띵스 다이어리 만년형 3종',
    brand: 'LIVEWORK',
    image: 'http://livework.net/web/product/big/202012/75d0576c4943b345cd892feb66244ae2.jpg',
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