<template>
  <q-page class="q-pa-md">
    <div class="row q-mb-lg">
      <search />
    </div>

    <no-tasks v-if="!Object.keys(tasksTodo).length" />

    <tasks-todo v-else :tasksTodo="tasksTodo" />

    <tasks-completed
      v-if="Object.keys(tasksCompleted).length"
      :tasksCompleted="tasksCompleted"
    />

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

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
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"])
  },

  components: {
    "add-task": require("../components/Tasks/Modals/AddTask.vue").default,
    "tasks-todo": require("../components/Tasks/TasksTodo").default,
    "tasks-completed": require("../components/Tasks/TasksCompleted").default,
    "no-tasks": require("../components/Tasks/NoTasks").default,
    search: require("../components/Tasks/Tools/Search.vue").default
  },

  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  }
};
</script>

<style></style>
