import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [{
      title: '代办一',
      completed: true,
    }, {
      title: '代办二',
      completed: false,
    }],
    filter: 'all',
  },
  getters: {
    todosCount: (state) => {
      return state.todos.length;
    },
    haveCompleted: (state) => {
      return state.todos.some(data => data.completed);
    },
    allCompleted: (state) => {
      return state.todos.every(data => data.completed);
    },
    showTodos: (state) => {
      let filter = state.filter;
      return state.todos.filter(data => {
        if (filter === 'all') {
          return true
        } else if (filter === 'active') {
          return !data.completed
        } else if (filter === 'completed') {
          return data.completed
        }
      })
    }
  },
  mutations: {
    handdleChangeFilter (state, filter) {
      state.filter = filter
    },
    handdleAddTodo (state, todo) {
      state.todos.push(todo)
    },
    handdleDeleteAllTodo (state) {
      state.todos = state.todos.filter(data => !data.completed)
    },
    setAllCompleted (state, status) {
      state.todos.forEach(data => data.completed = status)
    },
    handdleDeleteTodo(state,todo){
      let index = state.todos.indexOf(todo);
      state.todos.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
});
