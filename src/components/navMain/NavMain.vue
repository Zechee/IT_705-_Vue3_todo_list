<template>

    <div v-for="(item, index) in list" :key="index">

        <div class="item">
            <input type="checkbox" v-model="item.complete">
            {{item.title}}
            <button class="del" @click="del(item, index)">Delete</button>
        </div>
        
    </div>
</template>

<script>

// import { it } from 'node:test';
import { defineComponent, ref} from 'vue';

export default defineComponent({

    name: 'navMain',
    setup() {
        let list = ref([
            {
                title: 'Eating',
                complete: false
            },
            {
                title: 'Sleeping',
                complete: false
            },
            {
                title: 'Coding',
                complete: true
            }
        ])

        let del = (item, index) => {
            console.log(item)
            console.log(index)
        }

        return {
            list,
            del
        }

    }

})




</script>

<style scoped lang="scss"> 
.item {
    height: 35px;
    line-height: 35px;
    position: relative;
    width: 160px;

    button {
        position: absolute;
        right: 20px;
        top: 6px;
        display: none;
        z-index: 99;
    }

    &:hover {
        background: #ddd;
        button {
            display: block;
        }
    }
}

</style>