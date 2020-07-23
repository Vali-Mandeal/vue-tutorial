<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-lg">
        <search />
        <sort />
      </div>

      <p
        v-if="
          search &&
            !Object.keys(tasksTodo).length &&
            !Object.keys(tasksCompleted).length
        "
      >
        No search results containing {{ search }} have been found.
      </p>

      <q-scroll-area class="q-scroll-area-tasks">
        <no-tasks v-if="!Object.keys(tasksTodo).length && !search" />

        <tasks-todo
          v-if="Object.keys(tasksTodo).length"
          :tasksTodo="tasksTodo"
        />

        <tasks-completed
          v-if="Object.keys(tasksCompleted).length"
          :tasksCompleted="tasksCompleted"
          class="q-mb-xl"
        />
      </q-scroll-area>

      <div class="absolute-bottom 
      text-center 
      q-mb-lg
      no-pointer-events">
        <q-btn
          @click="showAddTask = true"
          round
          color="primary"
          size="24px"
          icon="add"
          class="all-pointer-events"
        />
      </div>

      <q-dialog v-model="showAddTask">
        <add-task @close="showAddTask = false" />
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      showAddTask: false
      // showEditTask: false
    };
  },
  computed: {
    // tasks() {
    //   return this.$store.getters["tasks/tasks"];
    // }
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    ...mapState("tasks", ["search"])
  },

  components: {
    "add-task": require("../components/Tasks/Modals/AddTask.vue").default,
    "tasks-todo": require("../components/Tasks/TasksTodo").default,
    "tasks-completed": require("../components/Tasks/TasksCompleted").default,
    "no-tasks": require("../components/Tasks/NoTasks").default,
    search: require("../components/Tasks/Tools/Search.vue").default,
    sort: require("../components/Tasks/Tools/Sort.vue").default
  },

  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  }
};
</script>

<style>
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>
