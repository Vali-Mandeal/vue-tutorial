<template>
  <q-card>
    <modal-header>Add Task</modal-header>

    <q-form @submit.prevent="submitForm">
      <q-card-section>
        <modal-task-name
        :name.sync="taskToSubmit.name"
        />

        <modal-due-date
        :dueDate.sync="taskToSubmit.dueDate"
        @clear="clearDueDateAndTime"
        />

        <div v-if="taskToSubmit.dueDate" class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.dueTime"
            label="Due time"
            class="col"
          >
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

      <pre>{{taskToSubmit}}</pre>
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
  },
  components: {
    "modal-header": require("../Modals/Shared/ModalHeader.vue").default,
    "modal-task-name": require("../Modals/Shared/ModalTaskName.vue").default,
    "modal-due-date": require("../Modals/Shared/ModalDueDate.vue").default
  }
};
</script>

<style></style>
