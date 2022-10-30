<template>

  <div>
    <Header>
      <input type="text" placeholder="Please input task name: " v-model="value"
      @keydown.enter="enter">
    </Header>
  </div>


</template>

<script>

import { defineComponent, ref } from 'vue';


export default defineComponent({

  name: 'navHeader',

  setup() {

    let value = ref('')
    let enter = () => {
      console.log(value.value)
    }
    return {
      value,
      enter
    }

  }

})
</script>

<style scoped lang="scss">
input {
  margin-bottom: 10px;
}

</style>