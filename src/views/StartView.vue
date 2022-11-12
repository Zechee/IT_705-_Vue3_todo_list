<template>
    <div class="start">
      <button @click="start">Start Task</button>
    </div>
</template>
  

<script>
import { defineComponent, ref, computed } from 'vue'

import {useRouter} from 'vue-router'

export default defineComponent({
  name: 'start',

  setup() {
    let router = useRouter()
    let name = ref('Nathan')
    let age = ref(25)
    let obj = ref({
        msg: 'start'
    })
    let start = () => {
        router.push({
            path: '/home',
            query: {
                name: name.value,
                age: age.value,
                obj: JSON.stringify(obj)
            }
        })
    }

    return {
        start
  
    }

  }
})



</script>