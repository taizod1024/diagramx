<template>
  <div>
    {{ message }}
    <hr />
    <BootstrapTest />
  </div>
</template>

<script>
import BootstrapTest from "./components/BootstrapTest.vue";
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  components: {
    BootstrapTest,
  },
  setup() {
    let message = ref("(undefined)");
    onMounted(() => {
      message = ref("abc");
    });
    return {
      message
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
