<script>
export default {
  name: 'StoryCard',
  props: { story: Object },
  data() {
    return {
      defaultCover: 'default.jpg',
      timePast: Date.now()
    }
  }
}
</script>
<template lang="pug">

//- h1(v-if='story' == undefined)
  //- | No stories yet...  Please visit us later (ʘ‿ʘ)╯
//- h1 (v-else)
.col
  .card.shadow-sm
    //- img(:src="`https://picsum.photos${photo.filename}`" :alt="photo.description" :title="photo.description")
    img.card-img-top(width='100%' height='225' :src='`https://picsum.photos/seed/${ story.storyCover }/300/300`' alt='Storycover' aria-label='Storycover' preserveaspectratio='xMidYMid slice' focusable='false')
    .card-body
      h5 {{ story.storyName }}
        p.card-text
          span(v-for="theme in story.storyTheme")
            span.theme {{ theme }}
      .d-flex.justify-content-between.align-items-center
        .btn-group
          router-link.btn.btn-sm.btn-outline-primary.px-3(type='button' :to="`/stories/${story._id}`") Read
          button.btn.btn-sm.btn-outline-primary.px-3(type='button' href='/story') Join
          //- Math.floor((Math.abs(date2-date1))/(1000*60*60*24))
        //- small.text-muted {{  timePast }} {{ story.lastEdit }} mins
        //- small.text-muted {{ story.lastEdit }} mins

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
span.theme {
  padding-left: 0.3rem;
  color: #aaa;
  font-size: 0.9rem;
}

a {
  color: #42b983;
}
</style>
