<template>
  <div class="signup">
    <h5>sign up with ...</h5>
    <div class="col-2 container">
      <a
        class="col-12 m-1 mr-1 btn btn-sm btn-outline-dark"
        href="/login/github"
        >github</a
      >
      <a
        class="col-12 m-1 mr-1 btn btn-sm btn-outline-dark"
        href="/login/twitter"
        >twitter</a
      >
      <a
        class="col-12 m-1 mr-1 btn btn-sm btn-outline-dark"
        href="/login/google"
        >google</a
      >
      <a
        class="col-12 m-1 mr-1 btn btn-sm btn-outline-dark"
        href="/login/facebook"
        >facebook</a
      >
      <a class="col-12 m-1 mr-1 btn btn-sm btn-outline-dark" href="/login/aad"
        >azure ad</a
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
