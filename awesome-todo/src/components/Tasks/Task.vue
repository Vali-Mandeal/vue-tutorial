<template>
  <div>
    <q-item
      @click="updateTask({ id: id, updates: { completed: !task.completed } })"
      v-touch-hold:1000.mouse="handleHold"
      clickable
      v-ripple
      :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    >
      <q-item-section side top>
        <q-checkbox :value="task.completed" class="no-pointer-events" />
      </q-item-section>

      <q-item-section>
        <q-item-label
          :class="{ 'text-strikethrough': task.completed }"
          v-html="$options.filters.searchHighlight(task.name, search)" />
      </q-item-section>

      <q-item-section v-if="task.dueDate" side>
        <div class="row">
          <div class="column justify-center">
            <q-icon name="event" size="18px" class="q-mr-xs" />
          </div>

          <div class="column">
            <q-item-label caption class="row justify-end">
              {{ task.dueDate | niceDate }}
            </q-item-label>
            <q-item-label caption class="row justify-end">
              <small>{{ taskDueTime }}</small>
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
        <edit-task :task="task" :id="id" @close="showEditTask = false" />
      </q-dialog>
    </q-item>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { date } from "quasar";

export default {
  props: ["task", "id"],
  data() {
    return {
      showEditTask: false
    };
  },

  computed: {
    ...mapState('tasks', ['search']),
    ...mapGetters('settings', ['settings']),
    taskDueTime() {
    if (this.settings.show12HourTimeFormat) {
      return date.formatDate(this.task.dueDate + ' '+this.task.dueTime, "h:mmA");
    }

      return this.task.dueTime
    }
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
    },

    handleHold() {
      this.showEditTask = true;
    }
  },

  components: {
    "edit-task": require("../Tasks/Modals/EditTask.vue").default
  },

  filters: {
    niceDate(value) {
      return date.formatDate(value, "D MMM");
    },

    searchHighlight(value, search) {
      if (search) {
        let searchRegEx = new RegExp(search, 'ig');

        return value.replace(searchRegEx, (match) => {
          return '<span class="bg-yellow-6">' + match + '</span>';
        })
      }
      return value;
    }
  }
};
</script>

<style></style>
