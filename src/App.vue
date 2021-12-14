<script lang="ts">
import './common/UserInfo';
import { defineComponent, onBeforeMount, reactive } from 'vue';
import { UserInfo } from './common/UserInfo';
export default defineComponent({
  components: {},
  setup() {
    const userinfo = reactive(new UserInfo());
    onBeforeMount(async () => {
      await userinfo.getAsync();
      // const { text } = await (await fetch("/api/message")).json();
    });
    return {
      userinfo,
    };
  },
});
</script>

<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">brand</a>
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

          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" aria-current="page" href="#">home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">about</a>
              </li>
            </ul>
          </div>
          <div class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav mr-auto">
              <template v-if="userinfo.isNotLogin()">
                <li class="nav-item ml-auto">
                  <a
                    class="btn btn-outline-light"
                    aria-current="page"
                    href="/login"
                    >sign in</a
                  >
                </li>
              </template>
              <template v-if="userinfo.isLogin()">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown02"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      :src="userinfo.avatarUrl"
                      style="border-radius: 50%; width: 20px; height: 20px"
                    />
                  </a>

                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdown02"
                  >
                    <li>
                      <span class="dropdown-item-text"
                        >Signed in as <b>{{ userinfo.me.userDetails }}</b> on
                        <b> {{ userinfo.me.identityProvider }}</b>
                      </span>
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
            <p class="lead text-muted">online diagram service</p>
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
