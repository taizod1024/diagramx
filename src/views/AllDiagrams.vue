<template>
  <div class="alldiagrams mt-4">
    <h5>all diagrams</h5>
    {{ info }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { appdiagramhelper } from '../../api/share/app/AppDiagramHelper';

export default defineComponent({
  name: 'AllDiagrams',
  // components: {
  //   HelloWorld,
  // },
  setup() {
    let info = reactive({
      a: 1,
      //   b: await appdiagramhelper.getAllDiagmrasAsync(),
    });
    return {
      info,
    };
  },
});
</script>
