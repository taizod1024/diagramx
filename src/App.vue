<script lang="ts">
import { Userinfo } from './common/UserInfo';
import { defineComponent, onBeforeMount, onMounted, ref } from 'vue';
export default defineComponent({
  components: {},
  setup() {
    let username = ref('*');
    let provider = ref('');
    let islogin = () => username.value != '*' && username.value;
    let isnotlogin = () => username.value != '*' && !username.value;
    onBeforeMount(async () => {
      console.log('onbeforemount');
      // const { text } = await (await fetch("/api/message")).json();
      await Userinfo.getUserInfoAsync();
      username.value = Userinfo.me?.userDetails;
      provider.value = Userinfo.me?.identityProvider;
    });
    onMounted(() => {
      console.log('onmounted');
    });
    return {
      username,
      provider,
      islogin,
      isnotlogin,
    };
  },
});
</script>

<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">ナビゲーションバー</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item active">
                <a class="nav-link" aria-current="page" href="#">ホーム</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">リンク</a>
              </li>
              <template v-if="isnotlogin()">
                <li class="nav-item ml-auto">
                  <a class="nav-link" aria-current="page" href="/login"
                    >sign in</a
                  >
                </li>
              </template>
              <template v-if="islogin()">
                <li class="nav-item dropdown ml-auto">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown02"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {{ username }}
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdown02">
                    <li>
                      <a class="dropdown-item disabled" href="#"
                        >Signed in as <b>{{ username }}</b> on
                        <b> {{ provider }}</b>
                      </a>
                    </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">more action ...</a>
                    </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li>
                      <a class="dropdown-item" href="/logout">sign out</a>
                    </li>
                  </ul>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </nav>
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
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>

                <div class="card-body">
                  <p class="card-text">
                    これは写真の解説文付きのカードです。自然に説明を加えることができます。しかしこの文章は少し長いかもしれません。
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        見る
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        編集
                      </button>
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
