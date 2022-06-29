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
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems
    }
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {completed: false, item: todoItem}
      localStorage.setItem(todoItem, JSON.stringify(obj)) // Javascript 객체를 string으로 변환
      state.todoItems.push(obj)
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item)
      state.todoItems.splice(payload.index, 1)
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
      localStorage.removeItem(payload.todoItem.item)
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
    },
    clearAll(state) {
      localStorage.clear()
      state.todoItems = []
    }
  }
})

const app = createApp({
  App
})

app.use(store)