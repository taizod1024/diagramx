<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'NewDiagram',
  setup() {
    let message = ref(1);
    const create = (): void => {
      message.value += 1;
    };
    return {
      create,
      message,
    };
  },
});
</script>

<template>
  <div class="newdiagram mt-4">
    <h5>New Diagram</h5>
    <input v-model="message" placeholder="edit me" />
    <button class="btn btn-sm btn-primary" v-on:click="create">create</button>
  </div>
</template>
