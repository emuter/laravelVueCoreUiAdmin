import * as types from '../mutation-types'

export const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false
}

export const mutations = {
  [types.toggleSidebarDesktop] (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },

  [types.toggleSidebarMobile] (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },

  [types.set] (state, [variable, value]) {
    state[variable] = value
  }
}