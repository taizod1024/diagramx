<template>
  <div>
    <div>{{ message }}</div>
    <hr />
    <BootstrapTest />
  </div>
</template>

<script lang="ts">
import BootstrapTest from "./components/BootstrapTest.vue";
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  components: {
    BootstrapTest,
  },
  setup() {
    let message = ref("");
    onMounted(async () => {
      const { text } = await (await fetch("/api/message")).json();
      message.value = text;
    });
    return {
      message,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
