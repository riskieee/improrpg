<script>
import Counter from '@/components/counter.vue'
import PlayerCard from '@/components/player-card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'PlayerDetail',
  components: { PlayerCard, Counter },
  data() {
    return {
      player: null
    }
  },
  async created() {
    this.player = await this.fetchPlayer(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchPlayer'])
  }
}
</script>

<template lang="pug">
  .about
    h1 Player Details
    PlayerCard(:player="player" v-if="player")
    Counter
</template>
