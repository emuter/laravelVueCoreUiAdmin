<template>
  <div id="app" class="h-100">
    <loading ref="loading" />

    <transition name="page" mode="out-in">
      <component :is="layout" v-if="layout" />
    </transition>
  </div>
</template>

<script>
import Loading from './Loading'

// Load layout components dynamically.
const requireContext = require.context('~/layouts', false, /.*\.vue$/)

const layouts = requireContext.keys()
  .map(file => [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)] )
  
  .reduce((components, [name, component]) => {
    components[name] = component.default || component
    return components
  }, {})

export default {
  el: '#app',
  //name: 'App',


  components: {
    Loading
  },

  data: () => ({
    layout: null,
    //defaultLayout: 'TheContainer',
    defaultLayout: 'DefaultLayout'
  }),

  metaInfo () {
    const { appName } = 'vaasil'

    return {
      title: appName,
      titleTemplate: `%s · ${appName}`
    }
  },

  mounted () {
    this.$loading = this.$refs.loading
  },

  methods: {
    /**
     * Set the application layout.
     *
     * @param {String} layout
     */
    setLayout (layout) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout
      }

      this.layout = layouts[layout]
    }
  }
}
</script>
