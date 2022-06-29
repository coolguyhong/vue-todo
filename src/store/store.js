import { createApp } from 'vue'
import { createStore } from 'vuex'
import todoApp from './modules/todoApp'
// import todo from 'modules/todo.js'
import App from '../App.vue'



export const store = createStore({
  modules: {
    todoApp
  }
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