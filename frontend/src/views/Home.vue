<template lang="pug">
  .home
    p {{ storys }}
    div(v-for="story in storys")
      p {{ story.storyName }}
      | has {{story.storyCover}}
      | and {{story.participants}} as players
    img(alt="Vue logo" src="../assets/logo.png")
    HelloWorld(msg="Welcome to Your Vue.js App")

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      storys: []
    }
  },
  async created() {
    const storysRequest = await axios.get('/api')
    this.storys.push(storysRequest.data)
  }
}
</script>
