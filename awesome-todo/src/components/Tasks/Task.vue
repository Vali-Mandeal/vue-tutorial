<template>
  <div>
    <q-item
      @click="updateTask({ id: id, updates: { completed: !task.completed } })"
      clickable
      v-ripple
      :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    >
      <q-item-section side top>
        <q-checkbox :value="task.completed" class="no-pointer-events" />
      </q-item-section>

      <q-item-section>
        <q-item-label :class="{ 'text-strikethrough': task.completed }">{{
          task.name
        }}</q-item-label>
      </q-item-section>

      <q-item-section v-if="task.dueDate" side>
        <div class="row">
          <div class="column justify-center">
            <q-icon name="event" size="18px" class="q-mr-xs" />
          </div>

          <div class="column">
            <q-item-label caption class="row justify-end">
              {{ task.dueDate }}
            </q-item-label>
            <q-item-label caption class="row justify-end">
              <small>{{ task.dueTime }}</small>
            </q-item-label>
          </div>
        </div>
      </q-item-section>

      <div class="row">
        <q-item-section>
          <q-btn
            @click.stop="showEditTask = true"
            flat
            round
            color="primary"
            dense
            icon="edit"
          />
        </q-item-section>

        <q-item-section side>
          <q-btn
            @click.stop="promptToDelete(id)"
            flat
            round
            color="red"
            dense
            icon="delete"
          />
        </q-item-section>
      </div>

      <q-dialog v-model="showEditTask">
        <edit-task 
        :task="task"
        :id="id"
        @close="showEditTask = false" />
      </q-dialog>
    </q-item>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["task", "id"],
  data() {
    return {
      showEditTask: false
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really delete?",
          ok: {
            push: true
          },
          cancel: {
            color: "negative"
          },
          persistent: true
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    }
  },

  components: {
    "edit-task": require("../Tasks/Modals/EditTask.vue").default,
  }
};
</script>

<style></style>
