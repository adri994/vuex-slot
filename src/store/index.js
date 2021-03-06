import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Recolectar las piedras del infinito', completed: false },
      { id: '2', text: 'Piedra del alma', completed: true },
      { id: '3', text: 'Piedra de poder', completed: true },
      { id: '4', text: 'Piedra de realidad', completed: false },
      { id: '5', text: 'Conseguir nuevos secuaces competentes', completed: false },
    ]
  },
  mutations: {
    toogleTodo:( state, id ) =>{
      const todoId = state.todos.findIndex(todo=>todo.id === id)
      state.todos[todoId].completed = !state.todos[todoId].completed
    },
    createTodo (state, text=""){
      if(text.length < 2) return

      state.todos.push({
        id: new Date().getDate(),
        completed: false,
        text
      })
    }
  },
  getters: {
    pendingTodo: ( state, getters, rootState )=>{
      return state.todos.filter(todo=>!todo.completed)
    },
    allTodos: (state)=> {
      return state.todos
    },
    completedTodos: (state)=> {
      return state.todos.filter(todo=>todo.completed)
    },
    getTodosByTab: ( _,getters ) =>(currentTab) =>{
      switch ( currentTab ) {
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodo
        case 'completed': return getters.completedTodos
      }
    }
  }
  ,
  actions: {
  },
  modules: {
  }
})
