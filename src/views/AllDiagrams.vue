<template>
  <div class="alldiagrams mt-4">
    <h5>all diagrams</h5>
    <div v-if="error">
      <div
        class="alert alert-danger"
        role="alert"
        style="padding: 6px; margin: 0px 16px"
      >
        {{ error }}
      </div>
    </div>
    <div v-if="content">
      {{ content }}
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { appdiagramhelper } from '../../api/diagram/app';

export default defineComponent({
  name: 'AllDiagrams',
  setup() {
    const content = ref({});
    const error = ref('');
    const load = async () => {
      try {
        const diagrams = await appdiagramhelper.getAllDiagramNamesAsync();
        content.value = diagrams;
      } catch (err) {
        error.value = err;
        console.log(error.value);
      }
    };
    load();
    return {
      content,
      error,
    };
  },
});
</script>
