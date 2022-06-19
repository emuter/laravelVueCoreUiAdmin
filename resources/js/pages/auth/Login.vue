<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm @submit.prevent="login" @keydown="form.onKeydown($event)">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <CInput
                    placeholder="Username | Email"
                    autocomplete="username email"
                     type="text"
                     v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }"
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                    v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton :loading="form.busy"  @click="login" color="dark" class="px-4">Login</CButton>
                      <CInputCheckbox v-model="remember" :update="remember"/> Remember !
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="gray" class="px-0 small">Forgot password?</CButton>
                      <CLink to="/register" class="d-lg-none"><CButton color="link" class="d-none d-lg-none">Register now!</CButton></CLink>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              color="gray-900 "
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h3>Not accepting registrations at the moment.</h3>
                
                <h3 class="mb-5">Sign up</h3>
                <p class="small font-monospace">Get your VAASIL account registered to get the best location mapped service across Maldives.</p>
                <CLink to="/register">
                  <CButton
                    color="light"
                    variant="outline"
                    size="sm"
                  >
                    Register Now!
                  </CButton>
                </CLink>
               
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import Form from 'vform'
import Cookies from 'js-cookie'

export default {
  name: 'Login',
  layout: 'BasicLayout',
  middleware: 'guest',

  metaInfo () {
    return { titleTemplate: `%s | ${this.$route.name}` }
  },

  data: () => ({
    form: new Form({
      email: '',
      password: ''
    }),
    remember: false
  }),

  methods: {
    async login () {
      // Submit the form.
      const { data } = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')

      // Redirect home.
      this.redirect()
    },

    redirect () {
      const intendedUrl = Cookies.get('intended_url')

      if (intendedUrl) {
        Cookies.remove('intended_url')
        this.$router.push({ path: intendedUrl })
      } else {
        this.$router.push({ name: 'admin' })
      }
    }
  }
}

</script>