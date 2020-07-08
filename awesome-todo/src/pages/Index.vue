<template>
  <q-page padding>
    <ul>
      <task 
      v-for="(task, index) in tasks"
      :task="task"
      :index="index"
      :deleteTask="deleteTask"
      :key="task.id"
      >{{task.name}}</task>
    </ul>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Go to shop",
          dueDate: "2019/05/12",
          dueTime: "18:30"
        },
        {
          id: 2,
          name: "Get bananas",
          dueDate: "2019/05/30",
          dueTime: "14:00"
        },
        {
          id: 3,
          name: "Get apples",
          dueDate: "2019/05/14",
          dueTime: "16:30"
        }
      ]
    };
  },

  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1)
    }
  },

  components: {
    'task' : require('components/Task.vue').default
  }
};
</script>

<style></style>
