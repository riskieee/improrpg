<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      backendError: null
    }
  },
  methods: {
    ...mapActions(['login']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.login({
          email: this.email,
          password: this.password
        })

        this.$router.push('/profile')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    }
  }
}
</script>

<template lang="pug">

.container-fluid
  .row
    .login.col-md-4.offset-md-4
      .login-form.bg-light.p-4.pb-5.my-5
        form.row.g-3(@submit="submitLogin")
          h4.pb-0.mb-0 Welcome Back!
          p.pt-0.mt-0 Log in to your account
          .col-12
            label(for='email') Email for Login:&nbsp;
            input.form-control(v-model='email' id='email' type='email' placeholder='Your email' required)
          .col-12
            label(for="password") Password
            input.form-control(v-model='password' id='password' type='password' placeholder='Your password' required)
          //- .col-12
          //-   .form-check
          //-     input#rememberMe.form-check-input(type='checkbox')
          //-     label.form-check-label(for='rememberMe')  Remember me
          .col-12
            button.btn.btn-primary.form-control(type='submit' value='Log in') Login
          .col-12
            div(v-if="backendError") {{ backendError }}
        hr.mt-4
        .col-12
          p.text-center.mb-0.pb-0 You have not an account yet?&nbsp;
          router-link.mt-0.pt-0(to="/register") Please Register!

</template>

<style lang="scss" scoped></style>
