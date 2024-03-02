<template>
  <div>
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        v-model="newTodo"
        @keyup.enter="handdleAddTodo"
      />
    </header>
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
  // },
  data() {
    return { newTodo: "" };
  },
  methods: {
    handdleAddTodo: function () {
      this.$store.commit("handdleAddTodo", {
        title: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
    },
  },
};
</script>

<style>
</style>
