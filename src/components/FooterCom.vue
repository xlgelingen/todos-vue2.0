<template>
  <div>
    <footer class="footer">
      <span class="todo-count"> <strong>3</strong> todo </span>
      <ul class="filters">
        <li>
          <router-link
            to="/all"
            :class="{ selected: filter === 'all' }"
            >All</router-link
          >
        </li>
        <li>
          <router-link
            to="/active"
            :class="{ selected: filter === 'active' }"
            >Active</router-link
          >
        </li>
        <li>
          <router-link
            to="/completed"
            :class="{ selected: filter === 'completed' }"
            >Completed</router-link
          >
        </li>
      </ul>
      <button
        v-show="haveCompleted"
        class="clear-completed"
        @click="handdleDeleteAllTodo"
      >
        Clear completed
      </button>
    </footer>
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
  //     default: "all",
  //   },
  // },
  data() {
    return { newTodo: "" };
  },
  computed: {
    filter() {
      return this.$store.state.filter;
    },
    todosCount() {
      return this.$store.getters.todosCount;
    },
    haveCompleted() {
      return this.$store.getters.haveCompleted;
    },
  },
  created() {
    this.fetchFilter();
  },
  watch: {
    $route: "fetchFilter",
  },
  methods: {
    handdleDeleteAllTodo: function () {
      this.$store.commit("handdleDeleteAllTodo");
    },
    handdleChangeFilter: function (filter) {
      this.$store.commit("handdleChangeFilter", filter);
    },
    fetchFilter: function () {
      let filter = this.$route.params.filter;
      this.$store.commit("handdleChangeFilter", filter);
    },
  },
};
</script>

<style>
</style>
