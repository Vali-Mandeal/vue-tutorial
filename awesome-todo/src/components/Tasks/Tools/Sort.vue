<template>
  <q-select
    emit-value
    map-options
    filled
    v-model="sortBy"
    :options="options"
    label="Sort by"
    stack-label
    class="col q-ml-sm"
  />
</template>

<script>
export default {
  data() {
    return {
      sortBy: null,

      options: [
          {
              label: "Name",
              value: "name"
          },
           {
              label: "Date",
              value: "dueDate"
          }
      ],

      dense: false,
      denseOpts: false
    };
  }
};
</script>

<style scoped>
.q-select {
  flex: 0 0 160px;
}
</style>
