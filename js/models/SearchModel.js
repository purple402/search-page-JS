const data = [
  {
    id: 1,
    name: '2021 마이 버디 01-03 (날짜형)',
    brand: 'DAILYLIKE',
    tag: ['2021 날짜형', '월간', '주간', '1년', '양장', '소프트커버', 'PVC커버포함'],
    image: 'http://thumbnail.10x10.co.kr/webimage/image/basic600/326/B003268412.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false'
  },
  {
    id: 2,
    name: '[Peanuts] 스터디 플래너 (4종)',
    brand: 'PEANUTS',
    tag: ['만년형', '월간', '일간', '4개월', '스프링', '하드커버', '120g'],
    image: 'http://thumbnail.10x10.co.kr/webimage/image/basic600/292/B002927222-4.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false'
  },
  {
    id: 3,
    name: '라이프앤피시스 유어플래너 L 3 color',
    brand: 'LIVEWORK',
    tag: ['만년형', '월간', '주간', '일간', '6개월', '소프트커버', '반양장', 'PVC커버포함', '100g', '체크리스트', '타임라인'],
    image: 'http://livework.net/web/product/extra/big/202011/d48993351ce5f62812e0fd182eab98eb.jpg',
  },
  {
    id: 4,
    name: '리틀띵스 다이어리 만년형 3종',
    brand: 'LIVEWORK',
    tag: ['만년형', '일간', '3개월', '하드커버', '양장'],
    image: 'http://livework.net/web/product/big/202012/75d0576c4943b345cd892feb66244ae2.jpg',
  },
  {
    id: 5,
    name: 'A6 와이드 체리픽 다이어리 2',
    brand: '2NUL',
    tag: ['만년형', '월간', '주간', '1년', 'PVC커버', '6공'],
    image: 'http://thumbnail.10x10.co.kr/webimage/image/basic600/338/B003388228.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false'
  },
  {
    id: 6,
    name: '바이풀디자인_기억보관함 라지_주간 2021',
    brand: 'BY.FULLDESIGN',
    tag: ['2021 날짜형', '월간', '주간', '1년', '소프트커버', '양장', '가름끈', '밴드', '120g'],
    image: 'http://thumbnail.10x10.co.kr/webimage/image/basic600/322/B003228816-2.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false'
  },
  {
    id: 7,
    name: '2021 Classy Gentle Diary',
    brand: 'PLEPIC',
    tag: ['2021 날짜형', '월간', '주간', '1년', 'PVC커버', '6공', '체크리스트', '120g'],
    image: 'http://thumbnail.10x10.co.kr/webimage/image/basic600/326/B003260024.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false'
  },
  {
    id: 8,
    name: 'AML. (all my love / yellow, pink)',
    brand: 'MAZZZZY',
    tag: ['만년형', '월간', '주간', '1년', '소프트커버', '제본', '100g'],
    image: 'http://thumbnail.10x10.co.kr/webimage/image/basic600/357/B003575479.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false'
  },
  {
    id: 9,
    name: '깊은시간 일기장 ver.3',
    brand: 'LIVEWORK',
    tag: ['만년형', '월간', '일간', '1년', '소프트커버', '제본', '가름끈', '100g'],
    image: 'http://livework.net/web/product/big/202012/738425dc0280976d524217842613e946.jpg'
  },
  {
    id: 10,
    name: '2021 기본 다이어리-1년용',
    brand: 'INDIGO',
    tag: ['2021 날짜형', '월간', '주간', '1년', '소프트커버', '제본', '120g'],
    image: 'http://thumbnail.10x10.co.kr/webimage/image/basic600/330/B003309355-1.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false'
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
  },
  check(checkedList) {
    return new Promise(resolve => {
      setTimeout(() => {
        let checkData = data.slice()
        let result = []
        result[0] = checkData
        checkedList.forEach((list, index) => {
          result[index + 1] = []
          result[index].forEach(item => {
              if (item.tag.includes(list)) {
                result[index+1].push(item)
              }
            })
          }) 
        resolve(result[checkedList.length])
        }, 200)
      })
  }
}