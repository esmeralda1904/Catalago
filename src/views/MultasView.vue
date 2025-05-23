<script setup>
import {api} from '@/utils/index'

setInterval(() => {
    boton();
}, 2000);
async function boton(){
    const response = await api();
    console.log(response);
}
</script>
<template>
    <!--<button @click="boton"></button>-->
</template>