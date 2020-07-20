<template>
  <q-card class="card">
    <q-img :src="food.imageUrl ? food.imageUrl : 'statics/image-placeholder.png'" basic contain>
      <div class="absolute-bottom text-h6">
        {{ food.name }}
      </div>
    </q-img>

    <q-card-section>
      <q-rating
        :value="food.rating"
        size="2em"
        color="orange"
        readonly
        class="q-mt-sm"
      />
    </q-card-section>

    <q-card-section>
      {{ food.description ? food.description : "No description provided."}}
    </q-card-section>

    <q-card-actions class="absolute-bottom" align="right">
      <q-btn @click="showEditFoodModal = true" icon="edit" color="blue" flat
        >Edit</q-btn
      >
      <q-btn @click="showDeleteFoodModal = true" icon="delete" color="red" flat
        >Delete</q-btn
      >
    </q-card-actions>

    <q-dialog v-model="showEditFoodModal">
      <modal-add-edit-food type="edit" :food="food" @close="showEditFoodModal=false"/>
    </q-dialog>

    <q-dialog v-model="showDeleteFoodModal">
      <modal-delete-food :id="food.id" />
    </q-dialog>
  </q-card>
</template>

<script>
export default {
  props: ["food"],
  data() {
    return {
      showEditFoodModal: false,
      showDeleteFoodModal: false
    };
  },
  components: {
    "modal-add-edit-food": require("components/ModalAddEditFood.vue").default,
    "modal-delete-food": require("components/ModalDeleteFood.vue").default
  }
};
</script>

<style>
.card {
  min-height: 400px;
  max-width: 250px;
  width: 250px;
  transition: background 0.3s;
}
.card-clickable {
  cursor: pointer;
}
.card-clickable:hover {
  background: #bdbdbd !important;
}
.card .q-img {
  max-height: 180px;
}
.card .q-img__image {
  background-size: cover !important;
}
.card .q-rating__icon {
  opacity: 0.2;
}
.card .q-rating__icon--active {
  opacity: 1;
}
</style>
