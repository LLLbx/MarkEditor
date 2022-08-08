<script setup  lang="ts">
import { ref } from 'vue';
import Button from './Button'
import Input from './input'

// export default {
//   setup() {
//     const colorObj: any = {
//       red: 'blue',
//       blue: 'green',
//       green: 'red'
//     }
//     const color = ref('red');
//     const colorChange = (value: string) => {
//       color.value = colorObj[value];
//     }

//     // 返回值会暴露给模板和其他的选项式 API 钩子
//     return {
//       color,
//       colorChange
//     }
//   },

// }
interface Props {
  msg:string,
  age:number
}
defineProps<Props>()
const colorObj:any = {
  red:'blue',
  blue:'green',
  green:'red'
}

const color = ref('red')

const colorChange = (value:string) => {
  color.value = colorObj[value];
}

const aa = (text:any) => {
  console.log(text);
  
}
const _props = {
  name:'ekko',
  age:123
}
</script>

<template>
  <h1>{{ color }}</h1>
  <button @click="colorChange(color)">change</button>
  <Button :="_props"/>
  <Input :color="'red'" @on-change="aa"></Input>
</template>

<style scoped>
h1 {
  color: v-bind(color);
}
</style>
