<template>
    <header>
        <div class="container">
            <NuxtLink to="/" class="header__logo">QuestInt</NuxtLink>
            <nav class="header__menu">
                <ul class="header__menuBlock">
                    <li class="header__menuItem">
                        <NuxtLink>Главная</NuxtLink>
                    </li>
                    <li class="header__menuItem">
                        <NuxtLink>Вопросы</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="header__right">
                <NuxtLink to="/">Профиль</NuxtLink>
                <button 
                class="header__rightButton"
                @click="mainStore.ChangeTheme()"
                >Тема</button>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import {useMainStore} from '~/store/main/main.ts'

const mainStore = useMainStore()
</script>

<style scoped>
header{padding: 10px 0px; background: var();}
header .container{display: flex; align-items: center; justify-content: space-between;}

.header__logo{font-size: 40px; font-weight: 700;}

.header__menuBlock{display: flex; align-items: center; gap: 40px;}

.header__menuItem{font-weight: 500; position: relative; transition: .3s;}
.header__menuItem::before{width: 0px; height: 2px; background: var(--); position: absolute; bottom: -2px; left: 0px;}
</style>