<template>

  <div>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
  </div>



</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'

import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { valueToNode } from '@babel/types'

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
    let list = computed(() => {
      return store.state.list
    })
    let value = ref('')

    // Adding tasks
    let add = (val) => {
      value.value = val
      // Determine if there are duplicate tasks
      let flag = true
      list.value.map(item => {
        if (item.title === value.value) {
          // If there are duplicate tasks
          flag = false
          alter('The task already exists! ')
        }
      })
      // no repeated tasks
      if (flag) {
        //Calling mutation
        store.commit('addTodo', {
          title: value.value,
          cpmplete: false
        })
      }

    }

    // Deleting tasks
    let del = (val) => {
      store.commit('delTodo', val)

    }

    // clear all completed tasks
    let clear = (val) => {
      store.commit('clear', val)

    }

    return {
      add,
      value,
      list,
      del,
      clear

    }

  }
})


</script>

<style scoped lang="scss">

</style>