<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref } from 'vue';
import { AppInfo } from '../api/share/AppInfo';
import { UserInfo } from '../api/share/UserInfo';

export default defineComponent({
  components: {},
  setup() {
    const appinfo = reactive(new AppInfo());
    const userinfo = reactive(new UserInfo());
    const text = ref('');
    onBeforeMount(async () => {
      await userinfo.getAsync();
      text.value = await (await fetch('/api/getDiagramsSummary')).json();
    });
    return {
      appinfo,
      userinfo,
      text,
    };
  },
});
</script>

<template>
  <div class="app-text">
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"> {{ appinfo.appname }}</a>
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
                  >all diagrams</router-link
                >
              </li>
              <li class="nav-item col-12 col-md-auto">
                <router-link to="/user" class="nav-link"
                  >user diagrams</router-link
                >
              </li>
              <template v-if="userinfo.isLogin()">
                <li class="nav-item col-12 col-md-auto">
                  <router-link to="/my" class="nav-link"
                    >my diagrams</router-link
                  >
                </li>
              </template>
            </ul>
          </div>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="bdNavbar"
          >
            <ul class="navbar-nav mr-auto">
              <template v-if="userinfo.isNotLogin()">
                <li>
                  <router-link to="/signup" class="m-1 btn btn-sm btn-light"
                    >sign up
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/signin"
                    class="m-1 btn btn-sm btn-outline-light"
                    >sign in
                  </router-link>
                </li>
              </template>
              <template v-if="userinfo.isLogin()">
                <li class="nav-item dropdown col-12 col-md-auto">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown-new"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    +
                  </a>

                  <ul
                    class="dropdown-menu dropdown-menu-end app-text"
                    aria-labelledby="dropdown-new"
                  >
                    <li>
                      <router-link
                        to="/new"
                        class="m-1 btn btn-sm btn-outline-light dropdown-item"
                      >
                        + new diagram
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown col-12 col-md-auto">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown-profile"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <template v-if="userinfo.isEmail()">
                      <img
                        :src="userinfo.avatarUrl"
                        :title="userinfo.displayName"
                        style="border-radius: 50%; width: 24px; height: 24px"
                      />
                      {{ userinfo.me.userDetails }}
                    </template>
                    <template v-else> {{ userinfo.me.userDetails }} </template>
                  </a>

                  <ul
                    class="dropdown-menu dropdown-menu-end app-text"
                    aria-labelledby="dropdown-profile"
                  >
                    <li>
                      <span class="dropdown-item-text" style="min-width: 250px"
                        >signed in with
                        <b>{{ userinfo.me.identityProvider }}</b> as
                        <b>{{ userinfo.me.userDetails }}</b>
                      </span>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
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

    <router-view />

    <!-- フッタ -->
    <footer class="fixed-bottom footer py-3 app-bg-secondary">
      <div class="container">
        <p class="mb-0">
          {{ appinfo.appname }}
          | <a :href="appinfo.author">author</a> |
          <a :href="appinfo.repository">repository</a>
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
.app-text {
  font-size: 14px !important;
}
.app-bg-primary {
  background: #ffffff;
}
.app-bg-secondary {
  background: #e8e8e8;
}
</style>
