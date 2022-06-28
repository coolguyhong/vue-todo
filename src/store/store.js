import { createApp } from 'vue'
import { createStore } from 'vuex'
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
  }
})

const app = createApp({
  App
})

app.use(store)