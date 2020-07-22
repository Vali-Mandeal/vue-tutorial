<template>
  <div class="row q-mb-sm">
    <q-input
      autofocus
      v-select-all
      outlined
      :value="name"
      @input="$emit('update:name', $event)"
      label="Task name"
      class="col"
      :rules="[val => !!val || 'Field is required']"
      ref="name"
      clearable
    />
  </div>
</template>

<script>
import selectAll from "src/directives/directive-select-all";

export default {
  props: ["name"],

  directives: {
    selectAll
  }
};
</script>

<style></style>
