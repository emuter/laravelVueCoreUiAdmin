<template>
  <div class="container-lg" style="height:90vh;">
    <div class="top-right links text-right">
      <template v-if="authenticated">
        <router-link :to="{ name: 'admin' }">
          Admin Dashboard
        </router-link>
      </template>
      <template v-else>
        <router-link :to="{ name: 'Login' }">
          {{ $t('login') }}
        </router-link>
        <router-link :to="{ name: 'Register' }">
          {{ $t('register') }}
        </router-link>
      </template>
    </div>

      <div class="row justify-content-center h-100">
        <div class="col text-center bg-gray-700 text-white rounded py-4">
          <div class="display-3 m-auto">{{ title }}</div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'BasicLayout',

  metaInfo () {
    return { titleTemplate: '%s | Home' }
  },

  data: () => ({
    title: window.config.appName
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>