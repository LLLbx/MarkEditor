<script setup lang="ts">
import { ref, computed } from "vue";
import Edit from "./components/edit/index.vue"
import Show from "./components/show"
import { baseSettingStore } from "@store"


//const fontNumber = ref<number>(24)
const base = baseSettingStore();

console.log(base.fontSize);


const fontSize =  computed<string>(() => {
    //return typeof fontNumber.value === 'number'? fontNumber.value + 'px' : '16px'
    return base.fontSize
})

</script>
<template>
    <header></header>
    <main>
        <Show class="show" />
        <Edit class="edit" />
    </main>
</template>
<style scoped lang="less">
main {
    height: 100%;
    width: 100%;
    display: flex;

    .show {
        flex: 1;
    }

    .edit {
        flex: 1;
        user-select: none;
        outline: none;
        border: 1px solid black;
        text-align: start;
        font-size: v-bind(fontSize);
    }
}
</style>