import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import NewStory from '../views/new-story.vue'
import PlayerDetail from '../views/player-detail.vue'
// import PlayerList from '../views/player-list.vue'

Vue.use(VueRouter)

export default function init(store) {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/stories/:id',
        name: 'StoryDetail',
        // route level code-splitting
        // this generates a separate chunk (stories.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "story-detail" */ '../views/story-detail.vue')
      },
      {
        path: '/players/:id',
        name: 'PlayerDetail',
        // route level code-splitting
        // this generates a separate chunk (player.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "player" */ '../views/player-detail.vue')
      },
      {
        path: '/new-story',
        name: 'newstory',
        component: NewStory,
        beforeEnter(to, from, next) {
          if (store.state.story) return next('/story-detail')
          return next()
        }
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
        beforeEnter(to, from, next) {
          if (store.state.player) return next('/player-detail')
          return next()
        }
      },
      {
        path: '/player-detail',
        name: 'player-detail',
        component: PlayerDetail,
        beforeEnter(to, from, next) {
          if (!store.state.player) return next('/login')
          return next()
        }
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter(to, from, next) {
          if (store.state.player) return next('/player-detail')
          return next()
        }
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
      }
    ]
  })
}
