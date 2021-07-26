<template lang="pug">
  section.py-5.text-start.container
    .row.py-lg-5
      .col-lg-6.col-md-8.mx-auto
        h1.fw-light About improRPG
        p.lead.text-muted
          | improRPG is THE live IMPROvisied multiplayer text based Role Play Game adventure story notebook sideapp
        p
          | improRPG by riskieee under MIT free to use on &nbsp;
          a.link-danger(href='https://github.com/riskieee/improrpg' target='_blank') GitHub
          | &nbsp;to use under CC0
        p
          | You have another idea and want to get in touch? Visit my homepage:&nbsp;
          a.link-danger(href='https://digitalpraxis.de/' target='_blank') digitalpraxis.de
          | &nbsp;or drill deeper as I did in WebDev at&nbsp;
          a.link-danger(href='https://www.coyotiv.com/' target='_blank') coyotiv.com
        h3 Idea
        ul
          li personal experience in pen&paper when game master tell a story and the player decide what way to choose to continue the story
          li AI role-playing game when a AI tells the story and player decide how the story continues&nbsp;
            a.link-danger(href='https://aidungeon.io/' target='_blank') aidungeon.io
          li
            | free rule set by
            a.link-danger(href='http://cheatyourownadventure.co.uk/' target='_blank')
            | and redone in german role game publisher for&nbsp;
            a.link-danger(href='https://www.erzaehlspiel-zine.de/blog/gratisrollenspieltag-2019-crowdfunding-schummelabenteuer/' target='_blank') Schummelabenteur
          li television/streaming sideapps
        h3 Research
        ul
          li by expeience of person in target group (me :)
          li strong need for socializing in voice/videochat while pandamic: rising number of provider
          li since pandemic higher need for communication, interaction, reality escape > gaming
          li online multiplayer gaming is popular
          li pen&paper is still alive but porals need game master and are time consuming for preparation > less game masters
          li text	based online live RPG&nbsp;
            a.link-danger(href='https://www.torn.com/' target='_blank') www.torn.com
            | &nbsp;or a fixed setting like&nbsp;
            a.link-danger(href='https://avalon-rpg.com' target='_blank') avalon-rpg.com
          li exiting portals for raltime live RPG sideapps grow like&nbsp;
            a.link-danger(href='http://roll20.net/' target='_blank') roll20.net
            | but relaying on gamemaster preparation and no group input
        h3 Planned Features
        ul
          li a group of player meet in any voice/videochat to guide a hero in an improvised rpg told by the group of players >> this is an extern portal and not in first solution
          li improRPG is a SideApp providing visualisation and an additional interactive layer to the story
          li at least 1 player need to have a login but everybody get a link and see a webpage with open storyline in basic textboxes and images to follow and interact
          li headline of story will be random chosen by dice or set by voting of group from table by mixing least 2 words
          li a random person starts the story or a default setting is chosen 'You	are somewhere (maybe in a medieval tavern knowing each other or not, you decide about the setting and your background spontaneous) having a nice evening with a beer. Suddenly the door is wide open and you hear screaming and stuff happening outside! A stranger shouts he needs help. You decide to help!'
          li narrator or somebody else takes text notes in a textarea-input and may input images while storytelling
          li player have to decide what to do in the story everybody can propose something and write an option (textarea-input) which appear as buttons for everybody to choose from. The majority is deciding by pushing the button within a given time (1 minute?)
          li winning options wins and the storyteller switch and continue the story
          li all player have a screen of the already described and chosen way and a box of the numbers 1-12. every time the dice was rolled the first lowest number is crossed and the next number is the new goal to be beaten
          li If a dangerous decision or a fight is coming the hero may die > a 12 dice (1-12) is rolled and	you have to be over the lowest not used number (1 at beginning) so at least at start a 2 to win.
          li If the dice is rolled lower the hero dies! The story will be cheated	and rolled back to last decision and another option have to be chosen by the group is mustn’t to rolled bis is always lucky.
          li The	story ends with the dead of the hero, a happy end the group decides	on or by just stopping if tired
          li A story may be interrupted and done later by the same or another group as a “branched” story to continue by choosing another decision…
          li The player can change the GUI appearance (Medieval, Space, ...)
          li group can vote for a kick and when 60% are reached the person will be removed
        h3 Early Wireframe
        .p-4.bg-white
          img.img-fluid(alt="Wireframe" title="Wireframe" src="/img/wireframe.png")


</template>
<style lang="scss"></style>
