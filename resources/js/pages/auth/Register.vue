<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm @submit.prevent="register" @keydown="form.onKeydown($event)">
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <CInput
                  placeholder="Username"
                  autocomplete="username"
                   name="name"  type="text"
                   v-model="form.name" :class="{ 'border-danger': form.errors.has('name') }"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="Email"
                  autocomplete="email"
                  prepend="@"
                   type="email"
                   v-model="form.email" :class="{ 'border-danger': form.errors.has('email') }"
                />
                <CInput
                  placeholder="Password"
                  type="password"
                  autocomplete="new-password"
                   v-model="form.password" :class="{ 'border-danger': form.errors.has('password') }"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CInput
                  placeholder="Repeat password"
                  type="password"
                  autocomplete="new-password"
                  class="mb-4"
                   v-model="form.password_confirmation" :class="{ 'border-danger': form.errors.has('password_confirmation') }"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  <!-- <template #append-content><CIcon name="cil-bell-exclamation"/></template> -->
                </CInput>
                <CButton :loading="form.busy" @click="register" color="success" block>Create Account</CButton>
              </CForm>
            </CCardBody>
            <CCardFooter class="p-4">
              <CRow>
                <CCol col="6">
                  <CButton block color="facebook">
                    Facebook
                  </CButton>
                </CCol>
                <CCol col="6">
                  <CButton block color="twitter">
                    Twitter
                  </CButton>
                </CCol>
              </CRow>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import Form from 'vform'

export default {
  name: 'Register',
  layout: 'DefaultLayout',
  middleware: 'guest',

  metaInfo () {
    return { titleTemplate: `%s | ${this.$route.name}` }
  },

  data: () => ({
    form: new Form({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }),
    mustVerifyEmail: false
  }),

  methods: {
    async register () {
      // Register the user.
      const { data } = await this.form.post('/api/register')

      // Must verify email fist.
      if (data.status) {
        this.mustVerifyEmail = true
      } else {
        // Log in the user.
        const { data: { token } } = await this.form.post('/api/login')

        // Save the token.
        this.$store.dispatch('auth/saveToken', { token })

        // Update the user.
        await this.$store.dispatch('auth/updateUser', { user: data })

        // Redirect home.
        this.$router.push({ name: 'home' })
      }
    }
  }
}

</script>