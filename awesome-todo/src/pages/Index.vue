<template>
  <q-page padding>
    <button @click="counter++" style="position: absolute; right: 10px">
      {{ counter }}
    </button>

    <input
      v-model="message"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
      @mouseleave="alertMessage"
    />
    <button @click="clearMessage">Clear</button>

    <h5 v-if="message.length" class="border-grey">
      {{ message }}
    </h5>

    <h6 v-else>No message entered</h6>

    <hr />

    <p>Uppercase message: {{ messageUpperCase }}</p>

    <p>Lowercase message: {{ message | messageLowerCase }}</p>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: "I love Vue.js!!!!",
      counter: 0
    };
  },

  computed: {
    messageUpperCase() {
      console.log("testing if this method gets fired");
      return this.message.toUpperCase();
    }
  },

  methods: {
    clearMessage() {
      this.message = "";
    },

    alertMessage() {
      alert(this.message);
    }
  },

  filters: {
    messageLowerCase(value){
      return value.toLowerCase();
    }
  }
};
</script>

<style>
.border-grey {
  border: 1px solid grey;
}
</style>
