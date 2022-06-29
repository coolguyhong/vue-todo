import { createApp } from 'vue'
import { createStore } from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
// import todo from 'modules/todo.js'
import App from '../App.vue'

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === '') {
           continue
        }
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }
    }
    return arr;
  }
}

export const store = createStore({
  state: {
    todoItems: storage.fetch()
  },
  getters: getters,
  mutations: mutations
})

// export const store = createStore({
//   modules: {
//     moduleA: todo, // 모듈 명칭: 모듈 파일명
//     todo // todo: todo
//   }
// })

const app = createApp({
  App
})

app.use(store)