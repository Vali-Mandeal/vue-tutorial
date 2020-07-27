<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="login" color="primary" />
        </template>
        Register to acces your Todos anywhere!
      </q-banner>
    </div>

    <div class="row q-mb-md">
      <q-input
        v-model="formData.email"
        label="Email"
        stack-label
        dense
        class="col"
        :rules="[
          val => isValidEmailAddress(val) || 'Please enter a valid email address'
        ]"
        lazy-rules
      />
    </div>

    <div class="row q-mb-md">
      <q-input
        v-model="formData.password"
        type="password"
        label="Password"
        stack-label
        dense
        class="col"
        :rules="[
          val => val.length >= 6 || 'Please enter at least 6 characters'
        ]"
        lazy-rules
      />
    </div>

    <div class="row">
      <div class="q-space" />
      <q-btn color="primary" label="Register" type="submit" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    isValidEmailAddress(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },

    submitForm() {
      console.log("submitForm");
    }
  }
};
</script>

<style></style>
