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
          <a class="navbar-brand">diagram</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#bdNavbar"
            aria-controls="bdNavbar"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="bdNavbar">
            <ul class="navbar-nav flex-row flex-wrap mr-auto">
              <li class="nav-item col-12 col-md-auto">
                <router-link to="/" class="nav-link" aria-current="page"
                  >Home</router-link
                >
              </li>
              <li class="nav-item col-12 col-md-auto">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
            </ul>
          </div>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="bdNavbar"
          >
            <ul class="navbar-nav mr-auto">
              <template v-if="userinfo.isNotLogin()">
                <li class="nav-item col-12 col-md-auto">
                  <a
                    class="btn btn-outline-light"
                    aria-current="page"
                    href="/login"
                    >sign in</a
                  >
                </li>
              </template>
              <template v-if="userinfo.isLogin()">
                <li class="nav-item dropdown col-12 col-md-auto">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown02"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <template v-if="userinfo.isEmail()">
                      <img
                        :src="userinfo.avatarUrl"
                        style="border-radius: 50%; width: 20px; height: 20px"
                      />
                    </template>
                    <template v-else>
                      {{ userinfo.displayName }}
                    </template>
                  </a>

                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdown02"
                  >
                    <li>
                      <span class="dropdown-item-text" style="min-width: 250px"
                        >Signed in to
                        <b> {{ userinfo.me.identityProvider }}</b> as
                        <b>{{ userinfo.me.userDetails }}</b>
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
      <router-view />
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
