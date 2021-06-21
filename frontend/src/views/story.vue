<script>
// @ is an alias to /src
import axios from 'axios'
// import StoryCard from '@/components/story-card.vue'

export default {
  name: 'Story',
  data() {
    return {
      storys: []
    }
  },
  async created() {
    const storysRequest = await axios.get('/api/')
    this.storys = storysRequest.data.storys
  }
}
</script>

<template lang="pug">

.container
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
                  li.person(data-chat='person1')
                    .user
                      img(src='../assets/avatar/avatar3.png' alt='Retail Admin')
                      span.status.busy
                    p.name-time
                      span.name Luphus
                      span.time 15/09/2021
                  li.person(data-chat='person1')
                    .user
                      img(src='../assets/avatar/avatar1.png' alt='Retail Admin')
                      span.status.offline
                    p.name-time
                      span.name Erion
                      span.time 15/09/2021
                  li.person.active-user(data-chat='person2')
                    .user
                      img(src='../assets/avatar/avatar2.png' alt='Retail Admin')
                      span.status.away
                    p.name-time
                      span.name Selfil
                      span.time 12/09/2021
                  li.person(data-chat='person3')
                    .user
                      img(src='../assets/avatar/avatar4.png' alt='Retail Admin')
                      span.status.busy
                    p.name-time
                      span.name Dharzeth
                      span.time 11/09/2021
                  li.person(data-chat='person4')
                    .user
                      img(src='../assets/avatar/avatar7.png' alt='Retail Admin')
                      span.status.offline
                    p.name-time
                      span.name Lisla
                      span.time 08/09/2021
                  li.person(data-chat='person5')
                    .user
                      img(src='../assets/avatar/avatar5.png' alt='Retail Admin')
                      span.status.away
                    p.name-time
                      span.name Michelangelo
                      span.time 05/09/2021
            .col-xl-8.col-lg-8.col-md-8.col-sm-9.col-9
              .selected-user
                span
                  | Story:
                  span.name Messenger of Doom
              .chat-container
                ul.chat-box.chatContainerScroll
                  li.chat-left
                    .chat-avatar
                      img(src='../assets/avatar/avatar3.png' alt='Retail Admin')
                      .chat-name Luphus
                    .chat-text
                      | Your uncle asked you to bring a tied package to his br0other in the next village. Your journey begins today. You have packed a backpack with food, a change clothes, some tools, a knife, a blanket, rope and a tent. The weather is good and you set off.
                    .chat-hour
                      | 08:55
                      span.fa.fa-check-circle
                  li.chat-right
                    .chat-hour
                      | 08:56
                      span.fa.fa-check-circle
                    .chat-text
                      | Todays path is relaxed and leads along the forest.You make good progress.You come to a crossroad and have to choose between several paths.
                    .chat-avatar
                      img(src='../assets/avatar/avatar3.png' alt='Retail Admin')
                      .chat-name Luphus
                  li.chat-left
                    .chat-avatar
                      img(src='../assets/avatar/avatar3.png' alt='Retail Admin')
                      .chat-name Luphus
                    .chat-text They are 5 paths. What they be? You look around and see 5 Options.
                    .chat-hour
                      | 08:57
                      span.fa.fa-check-circle
                  li.chat-right
                    .chat-hour
                      | 08:59
                      span.fa.fa-check-circle
                    .chat-text Well I am not sure. They may be a dark dangerous forest?
                    .chat-avatar
                      img(src='../assets/avatar/avatar5.png' alt='Retail Admin')
                      .chat-name Michelangelo
                  li.chat-left
                    .chat-avatar
                      img(src='../assets/avatar/avatar3.png' alt='Retail Admin')
                      .chat-name Russell
                    .chat-text Ok! Lets go for a angerous forest! Anybody else wit another path?
                    .chat-hour
                      | 08:57
                      span.fa.fa-check-circle
                  li.chat-right
                    .chat-hour
                      | 08:59
                      span.fa.fa-check-circle
                    .chat-text Hob about back to the village? Maybe to ask for some guardians?
                    .chat-avatar
                      img(src='../assets/avatar/avatar4.png' alt='Retail Admin')
                      .chat-name Jin
                  li.chat-left
                    .chat-avatar
                      img(src='../assets/avatar/avatar3.png' alt='Retail Admin')
                      .chat-name Luphus
                    .chat-text OK, why not. Back to the village for
                    .chat-hour
                      | 07:00
                      span.fa.fa-check-circle
                .form-group.mt-3.mb-0
                  textarea.form-control(rows='3' placeholder='Type your storynotes here...')
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
  padding: 0 15px;
  min-height: 64px;
  line-height: 64px;
  border-bottom: 1px solid #e6ecf3;
  border-radius: 0 3px 0 0;
}

.selected-user span {
  line-height: 100%;
}

.selected-user span.name {
  font-weight: 700;
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
