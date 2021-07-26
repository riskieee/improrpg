<script>
import { mapActions } from 'vuex'

export default {
  name: 'register',
  data() {
    return {
      playerName: '',
      email: '',
      password: '',
      playerPhoto: '',
      backendError: null
    }
  },
  methods: {
    ...mapActions(['register']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.register({
          playerName: this.playerName,
          email: this.email,
          password: this.password
        })

        this.$router.push('/login')
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
    .col-md-4.offset-md-4
      .register.register-form.bg-light.p-4.pb-5.my-5
        form.row.g-3(@submit="submitLogin")
          h4.pb-0.mb-0 Welcome!
          p.pt-0.mt-0 Create new account
          .col-12
            label(for="playerName") Your Name or Account Callsign:&nbsp;
            input.form-control(v-model="playerName" id="playerName" type="text" placeholder="Your name" required)
          .col-12
            label(for="playerPhoto") Avatar Image:&nbsp;
            input.form-control(v-model="playerPhoto" id="playerPhoto" type="text" placeholder="default.png ... avatar1-9.png")
          .col-12
            label(for="email") Email for Login:&nbsp;
            input.form-control(v-model="email" id="email" type="email" placeholder="Your email" required)
          .col-12
            label(for="password") Password
            input.form-control(v-model="password" id="password" type="password" placeholder="Your password" required)
          //- .col-12
          //-   .form-check
          //-     input#rememberMe.form-check-input(type='checkbox')
          //-     label.form-check-label(for='rememberMe')  Remember me
          .col-12
            button.btn.btn-primary.form-control(type="submit" value="Register") Register
          .col-12
            div(v-if="backendError") {{ backendError }}
        hr.mt-4
        .col-12
          p.text-center.mb-0
            p.mb-0.pb-0 Already have an account?&nbsp;
            router-link.mt-0.pt-0(to="/login") Please Log in!

</template>
<style lang="scss" scoped></style>
