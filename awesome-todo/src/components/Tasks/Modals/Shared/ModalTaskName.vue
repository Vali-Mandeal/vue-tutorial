<template>
    <div class="row q-mb-sm">
          <q-input
            autofocus
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
export default {
props: [
    "name"
]
}
</script>

<style>

</style>