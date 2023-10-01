<template>
    <div class="grid grid-cols-3 gap-6 px-12">
        <section class="col-span-2 flex justify-center">
            <!-- <img class="h-[600px]" :src="`src/assets/planets/${planet.id}.svg`" alt="Planeta"> -->
            <img class="h-[600px]" :src="import(`@/assets/planets/${planet.id}.svg`)" alt="Planeta">


        </section>
        <section class="flex flex-col justify-center gap-6 text-white ">
            <h1 class="font-medium text-4xl">{{planet.nombre}}</h1>
            <p>{{planet.resumen}}</p>
            <label for="">
                <samp>Source: </samp>
                
                <a href="#">Wikipedia</a>
                <img class="w-6 h6" src="@/assets/icons/arrow-top-right-on-square.svg" alt="">
            </label>

            <Button @onClick="value = false" :class="[!value ? 'bg-purple': '']">
                <div class="w-full h-full flex justify-start gap-6">
                    <spam>01</spam>
                    <spam>Caracteristicas</spam>
                </div>
            </Button>

            <Button @onClick="value = true" :class="[value ? 'bg-purple': '']">
                <div class="w-full h-full flex justify-start gap-6">
                    <spam>02</spam>
                    <spam>Datos</spam>
                </div>
            </Button>
        </section>
    </div>
    <Caracteristicas
    v-if="!value"
    :Caracteristicas ="planet.caracteristicas"
       />
    <Data 
    v-if="value"
    :data="planet.data"
    />

    
</template>


<script setup>
import Button from'../Button/Button.vue' 

import Data from '../Description/Data.vue'
import Caracteristicas from '../Description/Caracteristicas.vue';


import { ref } from 'vue';

const value = ref(false)

defineProps({
    planet: Object

})

</script>