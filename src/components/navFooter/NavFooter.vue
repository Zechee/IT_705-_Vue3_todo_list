<template>

    <div class="container">
        <div>
            Completed {{isComplete}} / All tasks {{all}}
        </div>
        <div v-if="isComplete > 0" class="btn">
        <button @click="clear">Clear completed tasks</button>
        </div>
    </div>
</template>

<script>

import { defineComponent, ref } from 'vue';


export default defineComponent({

    name: 'navFooter',

    setup() {

        let isComplete = ref(1)
        let all = ref(3)
        let clear = () => {
            console.log('clear')
        }

        return {
            isComplete,
            all,
            clear
        }

    }

})
</script>

<style scoped lang="scss">
.container {
    display: flex;
    align-items: center;
    .btn {
        margin-left: 10px;
    }
}

</style>