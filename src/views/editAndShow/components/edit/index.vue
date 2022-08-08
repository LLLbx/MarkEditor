<script setup lang="ts">
import { onMounted,inject } from 'vue'
    const vFocus = {
       mounted:(el:HTMLInputElement) => el.focus()
    }

    
</script>
<template>
   <div contenteditable="true" v-focus>

   </div>
</template>
<style lang="less" scoped>
    
</style>