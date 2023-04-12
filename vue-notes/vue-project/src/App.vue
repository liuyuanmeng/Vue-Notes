<script setup>
// here is composition API
import { ref } from "vue"
const count = ref(0)
console.log(count)
const minus = () => {
  count.value--
}
const add = () => {
  count.value++
}
//  Options API <setup> </setup>

// export default ({
//   data() {
//     return {
//       count: 0
//     }
//   },
//   methods: {
//     minus() {
//       this.count = this.count - 1
//     },
//     add() {
//       this.count = this.count + 1
//     }
//   }
// })

</script>
<template>
  <main>
     <div>
            <h4>The Current count is...</h4>
            <h1>{{ count }}</h1>
            <button @click="minus()">-</button>
            <button @click="add()">+</button>
          </div>

  </main>
  
</template>
<style scoped>
main{
  background-color: antiquewhite;
  height:100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
div{
  text-align: center;
}
</style>