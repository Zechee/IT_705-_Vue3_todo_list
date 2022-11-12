<template>
    <div>
        <div v-if="list.length > 0">
            <div v-for="(item, index) in list" :key="index">

                <div class="item">
                    <input type="checkbox" v-model="item.complete">
                    {{ item.title }}
                    <button class="del" @click="del(item, index)">Delete</button>
                </div>

            </div>
        </div>
        <div v-else id="notask">
            No tasks at the moment
        </div>
    </div>
</template>

<script>

// import { it } from 'node:test';
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({

    name: 'navMain',
    props: {
        list: {
            type: Array,
            required: true
        }

    },
    emits: ['del'],
    setup(props, ctx) {

        let store = useStore()

        let del = (item, index) => {
            ctx.emit('del', index)
            // console.log(item)
            // console.log(index)
        }

        return {
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
 #notask {

    margin-bottom: 5px;

 }
</style>