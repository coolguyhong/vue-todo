import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from '../App.vue'

export const store = createStore({
  state: {
    price: 100
  },
  getters: {
    originalPrice(state) {
      return state.price
    },
    doublePrice(state) {
      return state.price * 2
    },
    triplePrice(state) {
      return state.price * 3
    }
  }
})
  
const app = createApp({
  App
})

app.use(store)