<script>
// @ is an alias to /src
// import StoryCard from '@/components/story-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'StoryDetail',
  computed: {
    ...mapState(['player', 'currentLiveStream'])
  },
  data() {
    return {
      story: null,
      newStoryText: '',
      defaultText: 'Text is to provide later ...',
      backendError: null
    }
  },
  created() {
    goStoryLive()
    joinStoryStream(storyStream)
  },
  async created() {
    this.story = await this.fetchStory(this.$route.params.id)
  },
  methods: {
    // ...mapActions(['fetchStory', 'addStoryText']),
    ...mapActions(['fetchStory', 'addContent', 'goStoryLive', 'sendContentToLiveStoryStream', 'joinStoryStream']),
    async submitNewStoryContent(e) {
      e.preventDefault()

      this.sendContentToLiveStoryStream(this.newStoryText)
      // this.newStoryText = ''

      try {
        await this.addContent({
          storyId: this.story._id,
          text: this.newStoryText
        })
        this.$route.push('/stories/:id')
      } catch (e) {
        console.log(e, 'Error')
      }
    }
  },
  computed: {
    ...mapState(['currentLiveStoryStream', 'liveStoryStreams', 'player', 'liveStoryStreamContent'])
  }
}
</script>

<template lang="pug">
div
  .container(v-if="!story") There is no story yet!
  .container(v-else)

    // Page header start
    //- .page-title
    //-   .row.gutters
    //-     .col-xl-6.col-lg-6.col-md-6.col-sm-12.col-12
    //-       h5.title imroRPG
    //-     .col-xl-6.col-lg-6.col-md-6.col-sm-12.col-12
    // Page header end
    // Content wrapper start
    .content-wrapper
      // Row start
      .row.gutters
        .col-xl-12.col-lg-12.col-md-12.col-sm-12.col-12
          .card.m-0
            // Row start
            .row.no-gutters
              .col-xl-4.col-lg-4.col-md-4.col-sm-3.col-3
                .users-container
                  .chat-search-box
                    .input-group
                      input.form-control(placeholder='Search')
                      .input-group-btn
                        button.btn.btn-info(type='button')
                          i.fa.fa-search
                  ul.users
                    img(width='100%' height='auto' :src='`https://picsum.photos/seed/${ story.storyCover }/300/300`' alt='Storycover' aria-label='Storycover' preserveaspectratio='xMidYMid slice' focusable='false')
                    li.person(v-for="node in story.contentNodes")
                      .user
                        img(:src='`/img/avatar/${node.addingPlayer.playerPhoto}`' :title='`${node.addingPlayer.playerName }`' :alt='`${node.addingPlayer.playerName }`')
                        //- span.status.busy // .offline // .away
                      p.name-time
                        span.name {{node.addingPlayer.playerName }}
                      //-   span.time 15/09/2021
              .col-xl-8.col-lg-8.col-md-8.col-sm-9.col-9
                .selected-user
                  span
                    span.name {{ story.storyName }} &nbsp;
                    span.theme ({{ story.storyTheme.join(', ') }})
                .chat-container
                  ul.chat-box.chatContainerScroll
                    li.chat-left(v-for="cont in story.contentNodes")
                      .chat-avatar
                        img(:src='`/img/avatar/${cont.addingPlayer.playerPhoto}`' :title='`${ cont.addingPlayer.playerName }`' :alt='`${ cont.addingPlayer.playerName }`')
                        .chat-name {{ cont.addingPlayer.playerName }}
                      .chat-text(v-if="cont.contentNode")
                        | {{ cont.contentNode }}
                      .chat-text(v-else)
                        img(width='100%' height='200px' :src='`https://picsum.photos/${ cont.photoFilename }`' alt='Storycover' aria-label='Storycover' preserveaspectratio='xMidYMid slice' focusable='false')
                        p {{ cont.photoDescription }}
                      .chat-hour
                        | {{ cont.contentCreateDate }}
                        span.fa.fa-check-circle
                    //- li.chat-right
                    //-   .chat-hour
                    //-     | 08:56
                    //-     span.fa.fa-check-circle
                    //-   .chat-text
                    //-     | Todays path is relaxed and leads along the forest.You make good progress.You come to a crossroad and have to choose between several paths.
                    //-   .chat-avatar
                    //-     img(src='/img/avatar/avatar3.png' alt='Retail Admin')
                    //-     .chat-name Luphus
                  form.form-group.mt-3.mb-0(@submit='submitNewStoryContent')
                    //- textarea.form-control(v-if='player' rows='3' placeholder='Type your storynotes here...')
                    textarea.form-control(v-model='newStoryText' rows='3' placeholder='Add more story here...')
                    button.btn.btn-primary.form-control.mt-2( type='submit' value='submitNewStoryContent') Add
                    div(v-if="backendError") {{ backendError }}
            // Row end
      // Row end
    // Content wrapper end


</template>
<style scoped lang="scss" scoped>
/* 1.Variables */
/* Color Pallet  */
/* Search Box*/
.chat-search-box {
  border-radius: 3px 0 0 0;
  padding: 0.75rem 1rem;
}

.chat-search-box .input-group .form-control {
  border-radius: 2px 0 0 2px;
  border-right: 0;
}

.chat-search-box .input-group .form-control:focus {
  border-right: 0;
}

.chat-search-box .input-group .input-group-btn .btn {
  border-radius: 0 2px 2px 0;
  margin: 0;
}

.chat-search-box .input-group .input-group-btn .btn i {
  font-size: 1.2rem;
  line-height: 100%;
  vertical-align: text-top;
}

@media (max-width: 767px) {
  .chat-search-box {
    display: none;
  }
}

/* Users Container */

.users-container {
  position: relative;
  padding: 1rem 0;
  border-right: 1px solid #e6ecf3;
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  text-align: left;
}

/* Users */

.users {
  padding: 0;
}

.users .person {
  position: relative;
  width: 100%;
  padding: 10px 1rem;
  cursor: pointer;
  border-bottom: 1px solid #f0f4f8;
}

.users .person:hover {
  background-color: #ffffff; /* Fallback Color */
  background-image: linear-gradient(right, #e9eff5, #ffffff);
}

.users .person.active-user {
  background-color: #ffffff; /* Fallback Color */
  background-image: linear-gradient(right, #f7f9fb, #ffffff);
}

.users .person:last-child {
  border-bottom: 0;
}

.users .person .user {
  display: inline-block;
  position: relative;
  margin-right: 10px;
}

.users .person .user img {
  width: 48px;
  height: 48px;
  border-radius: 50px;
}

.users .person .user .status {
  width: 10px;
  height: 10px;
  border-radius: 100px;
  background: #e6ecf3;
  position: absolute;
  top: 0;
  right: 0;
}

.users .person .user .status.online {
  background: #9ec94a;
}

.users .person .user .status.offline {
  background: #c4d2e2;
}

.users .person .user .status.away {
  background: #f9be52;
}

.users .person .user .status.busy {
  background: #fd7274;
}

.users .person p.name-time {
  font-weight: 600;
  font-size: 0.85rem;
  display: inline-block;
}

.users .person p.name-time .time {
  font-weight: 400;
  font-size: 0.7rem;
  text-align: right;
  color: #8796af;
}

@media (max-width: 767px) {
  .users .person .user img {
    width: 30px;
    height: 30px;
  }
  .users .person p.name-time {
    display: none;
  }
  .users .person p.name-time .time {
    display: none;
  }
}

/* Chat right side*/

.selected-user {
  width: 100%;
  padding: 15px;
  min-height: 64px;

  border-bottom: 1px solid #e6ecf3;
  border-radius: 0 3px 0 0;
}

.selected-user span {
  line-height: 100%;
}

.selected-user span.name {
  font-weight: 700;
}

.selected-user span.theme {
  display: block;
  padding: 0;
  margin: 0;
  font-weight: normal;
  font-size: 0.85rem;
}

.chat-container {
  position: relative;
  padding: 1rem;
}

.chat-container li.chat-left,
.chat-container li.chat-right {
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-bottom: 40px;
}

.chat-container li img {
  width: 48px;
  height: 48px;
  border-radius: 30px;
}

.chat-container li .chat-avatar {
  margin-right: 20px;
}

.chat-container li.chat-right {
  justify-content: flex-end;
}

.chat-container li.chat-right > .chat-avatar {
  margin-left: 20px;
  margin-right: 0;
}

.chat-container li .chat-name {
  font-size: 0.75rem;
  color: #999999;
  text-align: center;
}

.chat-container li .chat-text {
  padding: 0.4rem 1rem;
  border-radius: 4px;
  background: #f4f5fb;
  font-weight: 300;
  line-height: 150%;
  position: relative;
}

.chat-container li .chat-text:before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  top: 10px;
  left: -20px;
  border: 10px solid;
  border-color: transparent #f4f5fb transparent transparent;
}

.chat-container li.chat-right > .chat-text {
  text-align: right;
}

.chat-container li.chat-right > .chat-text:before {
  right: -20px;
  border-color: transparent transparent transparent #f4f5fb;
  left: inherit;
}

.chat-container li .chat-hour {
  padding: 0;
  margin-bottom: 10px;
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 15px;
}

.chat-container li .chat-hour > span {
  font-size: 12px;
  padding: 0 3px;
  color: #9ec94a;
}

.chat-container li.chat-right > .chat-hour {
  margin: 0 15px 0 0;
}

@media (max-width: 767px) {
  .chat-container li.chat-left,
  .chat-container li.chat-right {
    flex-direction: column;
    margin-bottom: 30px;
  }
  .chat-container li img {
    width: 32px;
    height: 32px;
  }
  .chat-container li.chat-left .chat-avatar {
    margin: 0 0 5px 0;
    display: flex;
    align-items: center;
  }
  .chat-container li.chat-left .chat-hour {
    justify-content: flex-end;
  }
  .chat-container li.chat-left .chat-name {
    margin-left: 5px;
  }
  .chat-container li.chat-right .chat-avatar {
    order: -1;
    margin: 0 0 5px 0;
    align-items: center;
    display: flex;
    justify-content: right;
    flex-direction: row-reverse;
  }
  .chat-container li.chat-right .chat-hour {
    justify-content: flex-start;
    order: 2;
  }
  .chat-container li.chat-right .chat-name {
    margin-right: 5px;
  }
  .chat-container li .chat-text {
    font-size: 0.8rem;
  }
}

.chat-form {
  padding: 15px;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  border-top: 1px solid white;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.card {
  border: 0;
  background: transparent;
  border-radius: 2px;
  margin-bottom: 2rem;
  box-shadow: none;
}

@media (min-width: 600px) {
  body {
    font-size: 1.1em;
  }
}

@media (min-width: 1100px) {
  body {
    font-size: 1.2em;
  }
}

@media (min-width: 2200px) {
  body {
    font-size: 1.4em;
  }
}
</style>
