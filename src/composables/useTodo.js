import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodo = () =>{
    const store = useStore()

    const currentTab = ref('all')
    const textInput = ref('')

    return {
        currentTab,
        pending:computed(()=>store.getters['pendingTodo']),
        all:computed(()=>store.getters['allTodos']),
        completed:computed(()=>store.getters['completedTodos']),
        getTodosByTab:computed(()=>store.getters['getTodosByTab'](currentTab.value)),
        toggleTodo:(id) => store.commit('toogleTodo',id),
        createTodo:() =>store.commit('createTodo', textInput),
        resetInput:() => textInput.value = '',
        textInput

    }
}

export default useTodo
