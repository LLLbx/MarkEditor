<script setup lang="ts">
import { ref, computed,inject } from "vue";
import Edit from "./components/edit/index.vue"
import Show from "./components/show"
import { baseSettingStore } from "@store/index"
import MyButton from "@/components/Button.vue"
import Button from "@/components/Button"


//const fontNumber = ref<number>(24)
const base = baseSettingStore();

// console.log(
//     inject('global')
// );


const fontSize =  computed<string>(() => {
    //return typeof fontNumber.value === 'number'? fontNumber.value + 'px' : '16px'
    return base.fontSize
})

const onCl = () => {
    console.log(222222);
    
}
</script>
<template>
    <header>
        <MyButton @click.once="onCl">MyButtonVue </MyButton>
        <Button name="lbx" :age="123">
            <template #default>MyButtonTSX</template>
            <!-- <template #two>
                <span :style="{color:'red'}">TWO</span>
            </template> -->
        </Button>
        <span>{{$test(123)}}</span>
    </header>
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