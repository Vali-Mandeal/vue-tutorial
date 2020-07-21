<template>
  <q-select
    filled
    v-model="model"
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
      model: null,

      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],

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
