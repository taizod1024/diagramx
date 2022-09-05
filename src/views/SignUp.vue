<template>
  <div class="signup mt-4">
    <h5>sign up with</h5>
    <div class="container col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-2">
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
  name: 'SignUp',
});
</script>
