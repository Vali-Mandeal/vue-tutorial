<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn v-close-popup flat color="primary" dense icon="close" />
    </q-card-section>

    <q-form @submit.prevent="submitForm">
      <q-card-section>
        <div class="row q-mb-sm">
          <q-input
            autofocus
            outlined
            v-model="taskToSubmit.name"
            label="Task name"
            class="col"
            :rules="[val => !!val || 'Field is required']"
            ref="name"
            clearable
          />
        </div>

        <div class="row q-mb-sm">
          <q-input outlined v-model="taskToSubmit.dueDate" label="Due date">
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.dueDate"
                @click="clearDueDateAndTime"
                name="close"
                class="cursor-pointer"
              />
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy>
                  <q-date v-model="taskToSubmit.dueDate" clearable />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div v-if="taskToSubmit.dueDate" class="row q-mb-sm">
          <q-input 
          outlined 
          v-model="taskToSubmit.dueTime" 
          label="Due time"
          class="col">
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.dueTime"
                @click="taskToSubmit.dueTime = ''"
                name="close"
                class="cursor-pointer"
              />
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn @click="submitForm" label="Save" color="primary" />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
    submitForm() {
      console.log("bla");
      if (!this.$refs.name.hasError) {
        this.submitTask();
      }
    },

    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("close");
    },

    clearDueDateAndTime() {
      this.taskToSubmit.dueDate = "";
      this.taskToSubmit.dueTime = "";
    }
  }
};
</script>

<style></style>
