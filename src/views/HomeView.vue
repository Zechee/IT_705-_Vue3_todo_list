<template>

  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div>
  <div>
    {{list}}
  </div>
  <!-- <div>
    {{num1}} --- {{num2}}
    The sum of Num1 and Num2 : {{addNum}}
  </div>
  <div>
    <button @click="add">Add</button>
  </div>  -->


</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'

import { defineComponent, ref, computed } from 'vue'
import {useStore} from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {

    NavHeader,
    NavMain,
    NavFooter

  },

  props: {

  },

  setup() {
    let store = useStore()
    // console.log(store)
    let list = computed(() => {
      return store.state.list
    })
    // let num1 = ref(10)
    // let num2 = ref(20)
    // let addNum = computed(() => {
    //   return num1.value + num2.value
    // })
    // let add = () => {
    //   num1.value ++
    //   num2.value ++
    // }


    return {
      // num1,
      // num2,
      // addNum,
      // add
      list
    }

  }
})


</script>

<style scoped lang="scss">

</style>