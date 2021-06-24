<script>
export default {
  name: 'PlayerCard',
  props: ['player'],
  data() {
    return {
      defaultPhoto: 'default.jpg'
    }
  }
}
</script>

<template lang="pug">
.box
  h1 {{ player.playerName }}
  p Photo: {{ player.playerPhoto || defaultPhoto }}
  h2 Preferences ({{ player.playerPreferences.map(pref => pref).join(', ') }})
  p Active: {{ player.playerLastActive }}

</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #333;
  background: #dd0;
  border-radius: 0.3rem;
}
</style>
