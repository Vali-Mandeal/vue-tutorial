<template>
  <q-card>
    <q-card-section class="row items-center">
      <span class="q-ml-sm">Really delete this item?</span>
    </q-card-section>

    <q-card-actions align="right">
    <q-btn
        flat
        label="Cancel"
        color="primary"
        v-close-popup />

   <q-btn
     @click="deleteFood(id)"
     flat
     label="delete"
     color="primary"
     v-close-popup />

    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["id"],

  methods: {
    ...mapActions("exerciseFoods",["deleteFood"])
  }
};
</script>

<style></style>
