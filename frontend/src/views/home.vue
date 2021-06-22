<script>
// @ is an alias to /src
import StoryCard from '@/components/story-card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: { StoryCard },
  data() {
    return {
      storys: [],
      time: new Date()
    }
  },
  async created() {
    this.storys = await this.fetchStorys(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchStorys'])
  }
}
</script>

<template lang="pug">
  section.py-5.text-center.container
    .row.py-lg-5
      .col-lg-6.col-md-8.mx-auto
        h1.fw-light improRPG
        p.lead.text-muted
          | improRPG is THE live IMPROvisied multiplayer text based Role Play Game adventure story notebook sideapp
        p
          a.btn.btn-primary.m-2(href='/story-detail') Join
          a.btn.btn-secondary.m-2(href='/api/init') INIT mongoDB

    .home
      img.my-4(alt="Vue logo" src="/img/logo.png")
      story-card(v-for="story in storys" :story="story")
</template>
