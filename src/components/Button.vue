<template>
  <button @click="onC">
    <slot></slot>
  </button>
</template>


<script setup lang="ts">
import { useAttrs } from 'vue';
console.log(useAttrs());

    const onC = () => {
      console.log(1111111);
      
    }
</script>

<style>

</style>