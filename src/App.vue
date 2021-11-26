<template>
  <div>
    {{ message }}
    <hr>
    <b-button size="sm" variant="outline-primary"> Bootstrap Button </b-button>
    <b-button size="sm" variant="danger"> Bootstrap Button </b-button>
    #1
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "",
    };
  },
  async mounted() {
    const { text } = await (await fetch("/api/message")).json();
    this.message = text;
  },
};
</script>