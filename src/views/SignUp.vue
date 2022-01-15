<template>
  <div class="signup">
    <h6>Join diagramx</h6>
    <h3>Sign up with ...</h3>
    <div class="mt-4 container">
      <a
        class="col-12 col-md-4 m-1 mr-1 btn btn-lg btn-dark"
        href="/login/github"
        >GitHub</a
      >
      <a
        class="col-12 col-md-4 m-1 mr-1 btn btn-lg btn-info text-white"
        href="/login/twitter"
        >Twitter</a
      >
      <a
        class="col-12 col-md-4 m-1 mr-1 btn btn-lg btn-danger"
        href="/login/google"
        >Google</a
      >
      <a
        class="col-12 col-md-4 m-1 mr-1 btn btn-lg btn-primary"
        href="/login/facebook"
        >Facebook</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignUp',
});
</script>
