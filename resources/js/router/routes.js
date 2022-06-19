
// Containers
const DefaultLayout = () => import('~/layouts/DefaultLayout')
const AdminLayout = () => import('~/layouts/TheContainer').then(m => m.default || m)
const BasicLayout = () => import('~/layouts/BasicLayout')

// Views
const Dashboard = () => import('~/pages/Dashboard')

const Locations = () => import('~/components/theme/Colors')

const Colors = () => import('~/components/theme/Colors')

const Typography = () => import('~/components/theme/Typography')

const Charts = () => import('~/components/charts/Charts')
const Widgets = () => import('~/components/widgets/Widgets')

// components - Components
const Cards = () => import('~/components/base/Cards')
const Forms = () => import('~/components/base/Forms')
const Switches = () => import('~/components/base/Switches')
const Tables = () => import('~/components/base/Tables')
const Tabs = () => import('~/components/base/Tabs')
const Breadcrumbs = () => import('~/components/base/Breadcrumbs')
const Carousels = () => import('~/components/base/Carousels')
const Collapses = () => import('~/components/base/Collapses')
const Jumbotrons = () => import('~/components/base/Jumbotrons')
const ListGroups = () => import('~/components/base/ListGroups')
const Navs = () => import('~/components/base/Navs')
const Navbars = () => import('~/components/base/Navbars')
const Paginations = () => import('~/components/base/Paginations')
const Popovers = () => import('~/components/base/Popovers')
const ProgressBars = () => import('~/components/base/ProgressBars')
const Tooltips = () => import('~/components/base/Tooltips')

// components - Buttons
const StandardButtons = () => import('~/components/buttons/StandardButtons')
const ButtonGroups = () => import('~/components/buttons/ButtonGroups')
const Dropdowns = () => import('~/components/buttons/Dropdowns')
const BrandButtons = () => import('~/components/buttons/BrandButtons')

// components - Icons
const CoreUIIcons = () => import('~/components/icons/CoreUIIcons')
const Brands = () => import('~/components/icons/Brands')
const Flags = () => import('~/components/icons/Flags')

// components - Notifications
const Alerts = () => import('~/components/notifications/Alerts')
const Badges = () => import('~/components/notifications/Badges')
const Modals = () => import('~/components/notifications/Modals')
// components - Users
const Users = () => import('~/components/users/Users')
const User = () => import('~/components/users/User')

//  Pages
const Page404 = () => import('~/pages/error/Page404')
const Page500 = () => import('~/pages/error/Page500')
const Login = () => import('~/pages/auth/Login').then(m => m.default || m)
const Register = () => import('~/pages/auth/Register').then(m => m.default || m)


const Home = () => import('~/pages/welcome')

export default [
  {
    path: '/',
    name: 'Welcome',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/404',
        name: 'Page404',
        component: Page404
      },
      {
        path: '/500',
        name: 'Page500',
        component: Page500
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      }
    ]
  },
  
    {
      path: '/admin',
      redirect: '/admin/dashboard',
      name: 'admin',
      component: AdminLayout,
      children: [
        {
          path: '/admin/dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'colors',
          redirect: '/theme/colors',
          name: 'Locations',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Adresses',
              component: Locations
            },

          ]
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              component: Colors
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: {
            label: 'Users'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Users',
              component: Users
            },
            {
              path: ':id',
              meta: {
                label: `User`
              },
              name: 'User',
              component: User
            }
          ]
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/coreui-icons',
          name: 'CoreUI Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'Icons library',
              component: CoreUIIcons
            },
            {
              path: 'brands',
              name: 'Brands',
              component: Brands
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        }
      ]
    },

  ]