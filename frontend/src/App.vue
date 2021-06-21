<template lang="pug">
  #app
    header
      #navbarHeader.collapse.bg-dark
        .container
          .row
            .col-sm-8.col-md-7.py-4
              h4.text-white About
              p.text-muted
                | improRPG is a live IMPROvisied multiplayer text based Role Play Game adventure story notebook sideapp
            .col-sm-4.offset-md-1.py-4
              h4.text-white &nbsp;
              ul.list-unstyled
                li
                  router-link.text-white(to="/") Home
                li
                  router-link.text-white(to="/story") Story
                li
                  router-link.text-white(to="/about") About
      .navbar.navbar-dark.bg-dark.shadow-sm
        .container
          a.navbar-brand.d-flex.align-items-center(href='#')
            img.me-2(alt="improRPG DICE" src="../src/assets/logo-dice.png" width='20' height='20')
            strong improRPG
          button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarHeader' aria-controls='navbarHeader' aria-expanded='false' aria-label='Toggle navigation')
            span.navbar-toggler-icon
    router-view

    footer.text-muted.py-5.bg-dark
      .container
        p.float-end.mb-1
          a(href='#') ^ Back to top
        p.mb-1
          | improRPG is &copy; by Robert Karpinski but free to use on &nbsp;
          a(href='https://github.com/riskieee/improrpg') GitHub
          | &nbsp;to use under CC
        p.mb-0
          | You have another idea and want to get in touch? Visit my homepage:&nbsp;
          a(href='https://digitalpraxis.de/') digitalpraxis.de
          |  or drill deeper as I did in WebDev at&nbsp;
          a(href='https://www.coyotiv.com/') coyotiv.com
          | .

</template>

<style lang="scss">
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #eee url('assets/rpgback.jpg') top left / 100% fixed no-repeat;
}
.bg-dark {
  background: rgb(30, 30, 30);
  background: linear-gradient(0deg, rgba(50, 20, 20, 1) 0%, rgba(70, 50, 50, 1) 100%);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
