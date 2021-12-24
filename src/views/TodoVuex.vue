<template>
  <h1>Lista de Tarea de thanos</h1>
  <h2>Pendientes {{pending.length}}</h2>
  <h2>Todos {{all.length}}</h2>
  <h2>completados {{completed.length}}</h2>

  <button
      :class="{ 'active': currentTab === 'all' }"
      @click="currentTab ='all'"
  >
    Todos
  </button>

  <button
      :class="{ 'active': currentTab === 'pending' }"
      @click="currentTab ='pending'"
  >
    Pendientes
  </button>

  <button
      :class="{ 'active': currentTab === 'completed' }"
      @click="currentTab ='completed'"
  >
    Completados
  </button>

  <div>
    <ul>
      <li v-for="todo in getTodosByTab" :key="todo.id"
          :class="{ 'completed': todo.completed }"
      @dblclick="toggleTodo(todo.id)">
        {{ todo.text }}
      </li>
    </ul>
  </div>
  <button @click="openModal">
    Crear todo
  </button>
  <modal v-if="isOpen" @on:closed="closeOpen">

    <template v-slot:header>
      <h1>Crear una tarea</h1>
    </template>

    <template v-slot:body>
      <input v-model="textInput" type="text" />
    </template>

    <template v-slot:footer>
      <button @click="createTodo();closeOpen();">
        Crear
      </button>
    </template>
  </modal>

</template>

<script>

import useTodo from "../composables/useTodo";
import Modal from '@/components/Modal'
import {ref} from "vue";

export default {
  name: "TodoVuex",
  components: {Modal},
  setup() {
    const { currentTab,pending,completed,getTodosByTab,toggleTodo,all,textInput,createTodo,resetInput } = useTodo()
    const isOpen = ref(false)

    return {
      isOpen,
      openModal:()=> isOpen.value = true,
      closeOpen:()=> isOpen.value = false,
      currentTab,
      pending,
      completed,
      getTodosByTab,
      toggleTodo,
      all,
      textInput,
      createTodo,
      resetInput
    }
  }
}
</script>

<style scoped>

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}

</style>
