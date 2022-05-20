function populateList() {
  const data = Array.from({ length: 100 }).map(
    (_, i) => `<div class="item">Item ${i + 1}</div>`
  )

  const list = document.querySelector('#paginate .list')
  list.innerHTML = data.join('')

  return data
}
const html = {
  get(element) {
    return document.querySelector(element)
  }
}
const data = populateList()
let perPage = 10
const state = {
  page: 1,
  perPage,
  totalPage: Math.ceil(data.length/perPage
)}

const controls = {
  next() {
    state.page++
    if(state.page > state.totalPage) {
      state.page--;
    }
  },
  preview() {
    state.page--

    if(state.page < 1){
      state.page++
    }
  },
  goTo(page) {
    if (page < 1){
      page = 1
    }
    state.page = page

    if(page > state.totalPage) {
      state.page = state.totalPage
    }
  },
  createListners(){
    html.get('.first').addEventListener('click', () => {
      controls.goTo(1)
      update()
    })
    html.get('.last').addEventListener('click', () => {
      controls.goTo(state.totalPage)
      update()
    })
    html.get('.next').addEventListener('click', () => {
      controls.next()
      update()
    })
    html.get('.prev').addEventListener('click', () => {
      controls.preview()
      update()
    })
  }
}

const list = {
  create(item) {

  },
  update(){
    html.get('.list').innerHTML = ''

    let page = state.page - 1
    let start = page * state.perPage
    let end = start + state.perPage
  }
}

function update() {
  console.log(state.page)
}

function init() {
  controls.createListners()
}