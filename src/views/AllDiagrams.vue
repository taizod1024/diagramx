<template>
  <div class="alldiagrams mt-4">
    <h5>all diagrams</h5>
    <!-- error -->
    <div v-if="error">
      <div
        class="alert alert-danger"
        role="alert"
        style="padding: 6px; margin: 0px 16px"
      >
        {{ error }}
      </div>
    </div>
    <!-- content -->
    <div v-if="!diagrams">loading ...</div>
    <div v-else>
      <div v-for="diagram in diagrams" :key="diagram">
        <img
          class="app-diagram"
          v-bind:src="
            'http://127.0.0.1:10000/devstoreaccount1/diagramx-01/' + diagram
          "
        />
        {{ diagram }}
      </div>
      {{ diagrams }}
    </div>
  </div>
</template>

<style>
.app-diagram {
  width: 200px;
  height: 200px;
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { appdiagramhelper } from '../../api/diagram/app';

export default defineComponent({
  name: 'AllDiagrams',
  setup() {
    const diagrams = ref({});
    const error = ref('');
    const load = async () => {
      try {
        const dgms = await appdiagramhelper.getAllDiagramNamesAsync();
        diagrams.value = dgms;
      } catch (err) {
        error.value = err;
        console.log(error.value);
      }
    };
    load();
    return {
      diagrams,
      error,
    };
  },
});
</script>
