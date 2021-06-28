<script>
import Counter from '@/components/counter.vue'
import PlayerCard from '@/components/player-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'PlayerDetail',
  data() {
    return {
      // player: null
    }
  },
  // components: { PlayerCard, Counter },
  components: { PlayerCard },
  // components: { Counter },
  // async created() {
  //   this.player = await this.fetchPlayer(this.$route.params.id)
  // },
  // methods: {
  //   ...mapActions(['fetchPlayer'])
  // },
  computed: {
    ...mapState(['player'])
  }
}
</script>

<template lang="pug">
  .about
    h1 Player Detail
    PlayerCard(v-if="player" :player="player" )

    //- Counter
</template>
