<template>
  <q-page class="q-pa-md">
    <tasks-todo :tasksTodo="tasksTodo" />

    <tasks-completed :tasksCompleted="tasksCompleted" />

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
      showAddTask: false,
      showEditTask: false
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
    "tasks-completed": require("../components/Tasks/TasksCompleted").default
  }
};
</script>

<style></style>
