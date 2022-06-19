import 'core-js/stable'
import Vue from 'vue'
import router from '~/router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from '~/assets/icons/icons.js'
import store from '~/store'

import i18n from '~/plugins/i18n'
import App from '~/components/App'

import '~/plugins'
import '~/components'

Vue.config.performance = true
Vue.config.productionTip = false

Vue.use(CoreuiVue)
//Vue.prototype.$log = console.log.bind(console)

new Vue({
  i18n,
  store,
  router,
  icons,
  ...App
})
