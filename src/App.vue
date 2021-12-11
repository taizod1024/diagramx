<script lang="ts">
import { Userinfo } from './common/UserInfo';
import { defineComponent, onBeforeMount, onMounted, ref } from 'vue';
export default defineComponent({
  components: {},
  setup() {
    let username = ref('*');
    let islogin = () => username.value != '*' && username.value;
    let isnotlogin = () => username.value != '*' && !username.value;
    onBeforeMount(async () => {
      console.log('onbeforemount');
      // const { text } = await (await fetch("/api/message")).json();
      await Userinfo.getUserInfoAsync();
      username.value = Userinfo.me?.userDetails;
    });
    onMounted(() => {
      console.log('onmounted');
    });
    return {
      username,
      islogin,
      isnotlogin,
    };
  },
});
</script>

<template>
  <div>
    <header>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container">
          <a href="#" class="navbar-brand d-flex align-items-left">
            <strong>diagram</strong>
          </a>
          <a href="#" class="navbar-brand d-flex align-items-right">
            <template v-if="isnotlogin()">
              <a class="btn btn-primary" href="/login">ログイン</a>
            </template>
            <template v-if="islogin()">
              {{ username }}&nbsp;
              <a class="btn btn-secondary" href="/logout">ログアウト</a>
            </template>
          </a>
        </div>
      </div>
    </header>

    <main>
      <section class="py-6 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">diagram</h1>
            <p class="lead text-muted">オンライン図形描画サービス</p>
          </div>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                </svg>

                <div class="card-body">
                  <p class="card-text">これは写真の解説文付きのカードです。自然に説明を加えることができます。しかしこの文章は少し長いかもしれません。</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">見る</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">編集</button>
                    </div>
                    <small class="text-muted">9分</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="text-muted py-5">
      <div class="container">
        <p class="float-end mb-1">
          <a href="#">トップに戻る</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
