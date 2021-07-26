<script>
// @ is an alias to /src
import StoryCard from '@/components/story-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: { StoryCard },
  data() {
    return {
      stories: [],
      time: new Date()
    }
  },
  async created() {
    this.stories = await this.fetchStories(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchStories'])
  },
  computed: {
    ...mapState(['player'])
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
        p(v-if='player')
          router-link.btn.btn-danger.m-2(to='/new-story') Create your Story
        p(v-if='!player')
          a.btn.btn-danger.m-2(href='/login') Login
          span or
          a.btn.btn-danger.m-2(href='/register') Register
          span to your Story
    .home
      img.img-fluid.my-4(alt="Vue logo" src="/img/logo.png")
    .container(v-if='stories')
      .py-5
        .row.row-cols-1.row-cols-sm-2.row-cols-md-3.g-3
          story-card(v-for="story in stories" :key='story._id' :story='story' )
    a.btn.btn-secondary.m-2(v-if='stories.lenght' href='/api/init') (INIT mongo db)

</template>

<style lang="scss"></style>
