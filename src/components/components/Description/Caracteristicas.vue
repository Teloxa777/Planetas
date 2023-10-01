<template>
    <div class="grid grid-cols-3 gap-6 px-12 h-40 text-white">
        
        <section class=" border-2 border-purple rounded-lg p-14 gap-1 flex flex-col-2">
            <img class="h-[50px]" src="@/assets/dimeter.svg" alt="">
            <div class=" ">
                <h3 class="text-lg font-semibold">Diametro</h3>
                <p>{{ Caracteristicas.diametro }}</p>
            </div>
            
        </section>
        <section class="border-2 border-purple rounded-lg p-4 flex-col gap-3">
            <img src="@/assets/sun_icon.svg" alt="">
            <h3 class="text-lg font-semibold">Distancia al sol</h3>
            <p>{{ Caracteristicas.distanciaAlSol }}</p>
        </section>
        <section class="border-2 border-purple rounded-lg p-4 flex-col gap-3">
            <img src="@/assets/gravity.svg" alt="">
            <h3 class="text-lg font-semibold">Gravedad</h3>
            <p>{{ Caracteristicas.gravedad }}</p>
        </section>
    </div>
</template>

<script setup>
defineProps({
    Caracteristicas: Object
})
</script>