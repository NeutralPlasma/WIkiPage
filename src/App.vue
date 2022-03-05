<script setup>
import { RouterView, RouterLink } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'
//import NavLink from '@/components/NavLink.vue'
</script>

<template>
    <header>
      <NavBar />
    </header>


    <RouterView />


</template>

