<template>
  <div class="signin mt-4">
    <h5>sign in with</h5>
    <div class="container col-8 col-sm-5 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
      <a class="col-12 m-1 mr-1 btn btn-outline-dark" href="/login/github"
        >github</a
      >
      <a class="col-12 m-1 mr-1 btn btn-outline-dark" href="/login/twitter"
        >twitter</a
      >
      <a class="col-12 m-1 mr-1 btn btn-outline-dark" href="/login/google"
        >google</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignIn',
});
</script>
