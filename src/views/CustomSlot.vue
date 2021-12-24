<template>
  <h1>Aprendiendo slot</h1>
  <button  @click="openModal">Abrir modal</button>

  <modal v-if="isOpen" @on:closed="closeOpen" title="trabajando con slot">
    <!-- <h2>Titulo Modal</h2>
    <p> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
    <button>Salir</button> -->

    <!-- NameSlot nos permite utilizarlo en cualquier lado del modal -->
    <template v-slot:header>
      <h2>Titulo Modal</h2>
    </template>

    <template v-slot:footer>
       <button @click="closeOpen">Salir</button>
    </template>

    <template v-slot:body>
      <p> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
    </template>

    <!-- Forma de conseguir una variable que me envia desde el slot -->
    <template v-slot:exposed="slotProps">
      {{slotProps}}
    </template>
  </modal>

</template>

<script>
import { ref } from "vue";
import Modal from '@/components/Modal.vue'
export default {
  name: "CustomSlot",
  components: {Modal},
  setup() {

    const isOpen = ref(false)
    return {
      isOpen,
      openModal:()=> isOpen.value = true,
      closeOpen:()=> isOpen.value = false
    }
  }
}
</script>

<style scoped>

</style>
