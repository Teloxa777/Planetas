<script setup>
import Navbar from './components/components/Navbar.vue';
import planet from "./components/components/planet/planet.vue";
import planetas from './utilities/data.js';

import { ref } from 'vue';

const planeta = ref(null);

planeta.value = planetas.planetas[0]

const searchPlanet =(planetSelecter) =>{
	const planetaEncontrado = planetas.planetas.find(item => item.id === planetSelecter);
	planeta.value = planetaEncontrado
}
</script>

<template>
	<Navbar @change="(planetSelecter) => searchPlanet(planetSelecter)"/>
	<planet :planet="planeta"/>
</template>

<style scoped>

</style>
