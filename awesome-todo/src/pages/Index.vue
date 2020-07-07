<template>
  <q-page padding>
    <input v-model="message" 
    @keyup.esc="clearMessage" 
    @keyup.enter="alertMessage"
    @mouseleave="alertMessage"
    />
    <button @click="clearMessage">Clear</button>
    <h5 class="border-grey" v-show="message.length">{{ message }}</h5>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: "I love Vue.js!!!!"
    };
  },
  methods: {
    clearMessage() {
      this.message = "";
    },

    alertMessage() {
      alert(this.message);
    }
  }
};
</script>

<style>
.border-grey{
  border: 1px solid grey;
}
</style>
