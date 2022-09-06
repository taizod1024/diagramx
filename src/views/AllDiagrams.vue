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
    <div v-if="info">
      {{ info }}
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { appdiagramhelper } from '../../api/share/app/AppDiagramHelper';

export default defineComponent({
  name: 'AllDiagrams',
  // components: {
  //   HelloWorld,
  // },
  setup() {
    const info = ref({});
    const error = ref('');
    const load = async () => {
      try {
        const diagrams = await appdiagramhelper.getAllDiagramsAsync();
        info.value = diagrams;
      } catch (err) {
        error.value = err;
        console.log(error.value);
      }
    };
    load();
    return {
      info,
      error,
    };
  },
});
</script>
