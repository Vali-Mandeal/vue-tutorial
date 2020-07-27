<template>
  <form>
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
        :dense="dense"
        class="col"
      />
    </div>

    <div class="row q-mb-md">
      <q-input
        v-model="formData.password"
        type="password"
        label="Password"
        stack-label
        :dense="dense"
        class="col"
      />
    </div>

    <div class="row">
      <div class="q-space" />
      <q-btn color="primary" label="Register" />
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
  }
};
</script>

<style></style>
