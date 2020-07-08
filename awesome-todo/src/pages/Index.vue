<template>
  <q-page padding>
    <ul>
      <task 
      v-for="(task, index) in tasks"
      :task="task"
      :index="index"
      :key="task.name + index"
      ></task>
      
    </ul>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          name: "Go to shop",
          dueDate: "2019/05/12",
          dueTime: "18:30"
        },
        {
          name: "Get bananas",
          dueDate: "2019/05/30",
          dueTime: "14:00"
        },
        {
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
