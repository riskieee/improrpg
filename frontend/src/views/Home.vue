<script>
// @ is an alias to /src
import axios from 'axios'
import StoryCard from '@/components/story-card.vue'

export default {
  name: 'Home',
  components: {
    StoryCard
  },
  data() {
    return {
      storys: [],
      time: new Date()
    }
  },
  async created() {
    const storysRequest = await axios.get('/api/')
    this.storys = storysRequest.data.storys
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
          a.btn.btn-primary.m-2(href='#') Join
          a.btn.btn-secondary.m-2(href='http://improrpg.localhost/api/init') INIT mongoDB

    .home
      img.my-4(alt="Vue logo" src="../assets/logo.png")

    story-card(v-for="story in storys" :story="story")
</template>
