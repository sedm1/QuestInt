<template>
   <NuxtPage />
   {{ MainState.theme }}
</template>
<script setup lang="ts">
import '@topvisor/ui/assets/core.css'
import { useMainStore } from '~/store/main/main.ts';

const MainState = useMainStore()

</script>
<style>
* { padding: 0; margin: 0; box-sizing: border-box; font-family: "Raleway", sans-serif; font-size: 14px;}


h1, h2, h3{ font-family: "Inter", sans-serif;}

section {margin-bottom: 100px;}

img {width: 100%; height: auto; }

a {text-decoration: none; color: inherit; cursor: pointer;}

button {font-family: inherit; background: none; border: 0 none; outline: 0 none; cursor: pointer; }

li {list-style: none;}

.container {max-width: 1520px; width: 100%; padding: 0px 20px; margin: 0 auto;}

input {background: none; border: 0 none; outline: 0 none; cursor: text;}

.section__title{font-size: 32px; font-weight: 700;}

@media screen and (max-width: 900px){
  section{margin-bottom: 60px;}

  .section__title{font-size: 5vw;}
}
        
</style>