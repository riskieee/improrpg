<script>
export default {
  name: 'StoryCard',
  props: ['story'],
  data() {
    return {
      defaultCover: 'default.jpg',
      timePast: Date.now()
    }
  }
}
</script>
<template lang="pug">

//- WORKING
.album.py-5
  .container
    //- h1(v-if='story' == undefined)
    //-   | No storys yet...  Please visit us later (ʘ‿ʘ)╯
    //- h1 (v-else)
    .row.row-cols-1.row-cols-sm-2.row-cols-md-3.g-3
      .col
        .card.shadow-sm
          //- img.card-img-top.py-1(width='100%' height='225' src=`../assets/${story.storyCover}` alt='Storycover' aria-label='Storycover' preserveaspectratio='xMidYMid slice' focusable='false')
          img.card-img-top(width='100%' height='225' src=`../assets/fantasy.jpg` alt='Storycover' aria-label='Storycover' preserveaspectratio='xMidYMid slice' focusable='false')
          .card-body
            p.card-text
            p {{ story.storyCover }}
              h5 {{ story.storyName }}
                span {{ story.storyTheme.join(', ') }}
              p {{ story.contentNodes.map(item => item.contentNode).join(' ') }}
              p {{ story.contentNodes.map(player => player.addingPlayer.playerName).join(', ') }}
            .d-flex.justify-content-between.align-items-center
              .btn-group
                button.btn.btn-sm.btn-outline-primary.px-3(type='button' href='/story') Join
                button.btn.btn-sm.btn-outline-primary.px-3(type='button' href='/story') Read
              small.text-muted {{ timePast }} - {{ story.lastEdit }} mins


  //- OLD REMOVE
    //- img.card-img-top.py-1(src=`../assets/${story.storyCover || defaultCover}` width='100%' height='225' alt='cover' aria-label='cover' preserveaspectratio='xMidYMid slice' focusable='false')
  //- h2 Length ({{ story.contentNodes.length }})

  //- .photo(v-for="contentNode in story.contentNodes")
  //-   h3 {{ contentNodes.addingPlayer }}
  //-   p(v-if="!contentNodes.length")
  //-     | Story didn't started yet!
  //-   p(v-else)
  //-     | {{ photo.likedBy.map(user => user.name).join(', ') }}
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h5 span {
  padding-left: 1rem;
  color: #999;
  font-size: 0.9rem;
}

a {
  color: #42b983;
}
</style>
