<template>
  <div>
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        v-model="allCompleted"
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li
          :class="[
            'todo',
            { completed: item.completed },
            { editing: editTodo === item },
          ]"
          v-for="(item, index) in showTodos"
          :key="index"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="item.completed" />
            <label @dblclick="handdleEdit(item)">{{ item.title }}</label>
            <button class="destroy" @click="handdleDeleteTodo(item)"></button>
          </div>
          <input
            class="edit"
            type="text"
            v-model="item.title"
            v-todo-focus="editTodo === item"
            @blur="handdleEditDone(item)"
            @keyup.enter="handdleEditDone(item)"
            @keyup.esc="handdleEditCancle(item)"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "headerCom",
  // props: {
  //   todos: {
  //     type: Array,
  //     default: () => [],
  //   },
  //   filter: {
  //     type: String,
  //     default: 'all'
  //   }
  // },
  data() {
    return {
      editTodo: null,
      beforeEditCache: "",
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    filter() {
      return this.$store.state.filter;
    },
    allCompleted: {
      get: function () {
        return this.$store.getters.allCompleted;
      },
      set: function (value) {
        this.$store.commit("setAllCompleted",value);
      },
    },
    showTodos() {
      return this.$store.getters.showTodos;
    },
  },
  methods: {
    handdleEdit: function (item) {
      this.editTodo = item;
      this.beforeEditCache = item.title;
    },
    handdleEditDone: function (item) {
      if (item.title.trim()) {
        this.editTodo = null;
        this.beforeEditCache = "";
      } else {
        this.handdleEditCancle(item);
      }
    },
    handdleEditCancle: function (item) {
      item.title = this.beforeEditCache;
      this.editTodo = null;
      this.beforeEditCache = "";
    },
    handdleDeleteTodo: function (todo) {
      this.$store.commit("handdleDeleteTodo",todo);
    },
  },
  directives: {
    "todo-focus": function (el, binding) {
      if (binding.value) {
        el.focus();
      }
    },
  },
};
</script>

<style>
</style>
