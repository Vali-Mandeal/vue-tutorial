<template>
  <q-page padding>
    <ul>
      <li v-for="(task, index) in tasks" :key="task.name">
        <div>{{ task.name }} {{index}}</div>
        <small>{{ task.dueDate }} @ {{ task.dueTime}} </small>
        <button @click="deleteTask">X</button>

      </li>
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
  }
};
</script>

<style></style>
