<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <modal v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        <h3>
          경고!
          <i class="closeModalBtn fa-solid fa-xmark" @click="showModal = false"></i>
        </h3>
      </template>
      <template v-slot:body>
        <div>
          아무것도 입력하지 않으셨습니다.
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'
// slot의 경우 일부 ui 재사용할 수 있는 기능
export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem)
        this.clearInput()
      } else {
        this.showModal = !this.showModal
      }
    },
    clearInput() {
      this.newTodoItem = ''
    }
  },
  components: {
    Modal: Modal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn{
  color: #42b983;
}

</style>