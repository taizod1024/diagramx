<script lang="ts">
import './common/UserInfo';
import { defineComponent, onBeforeMount, reactive, ref } from 'vue';
import { AppInfo } from './common/AppInfo';
import { UserInfo } from './common/UserInfo';
export default defineComponent({
  components: {},
  setup() {
    const appinfo = reactive(new AppInfo());
    const userinfo = reactive(new UserInfo());
    const text = ref('');
    onBeforeMount(async () => {
      await userinfo.getAsync();
      text.value = await (await fetch('/api/message')).json();
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
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">{{ appinfo.appname }}</a>
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
              <template v-if="userinfo.isLogin()">
                <li class="nav-item col-12 col-md-auto">
                  <router-link to="/user" class="nav-link"
                    >your diagrams</router-link
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
                <li class="nav-item col-12 col-md-auto">
                  <a
                    class="btn btn-secondary btn-sm"
                    aria-current="page"
                    href="/login/github"
                    style="width: 144px; margin: 1px"
                    >sign in github</a
                  >
                </li>
                <li class="nav-item col-12 col-md-auto">
                  <a
                    class="btn btn-primary btn-sm"
                    aria-current="page"
                    href="/login/twitter"
                    style="width: 144px; margin: 1px"
                    >sign in twitter</a
                  >
                </li>
                <li class="nav-item col-12 col-md-auto">
                  <a
                    class="btn btn-danger btn-sm"
                    aria-current="page"
                    href="/login/google"
                    style="width: 144px; margin: 1px"
                    >sign in google</a
                  >
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
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdown-new"
                  >
                    <li><a class="dropdown-item" href="#">new diagram</a></li>
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
                    </template>
                    <template v-else>
                      {{ userinfo.displayName }}
                    </template>
                  </a>

                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdown-profile"
                  >
                    <li>
                      <span class="dropdown-item-text" style="min-width: 250px"
                        >signed in to
                        <b> {{ userinfo.me.identityProvider }}</b> as
                        <b>{{ userinfo.me.userDetails }}</b>
                      </span>
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
      <p>debug: {{ text }}</p>
      <router-view />
    </main>

    <footer class="text-muted py-5">
      <div class="container">
        <p class="float-end mb-1">
          <a href="#">back to top</a>
        </p>
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
</style>
