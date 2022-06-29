<template>
  <div id="root">
    <p>{{ originalPrice }}</p>
    <p>{{ doublePrice }}</p>
    <p>{{ triplePrice }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['originalPrice', 'doublePrice', 'triplePrice'])
    // helper 함수는 길게 작성해야 하는 함수를 간편하게 해줌
    // originalPrice() {
    //   return this.$store.getters.originalPrice
    // },
    // doublePrice() {
    //   return this.$store.getters.doublePrice
    // },
    // triplePrice() {
    //   return this.$store.getters.triplePrice
    // }
  }
}
</script>

<style>

</style>