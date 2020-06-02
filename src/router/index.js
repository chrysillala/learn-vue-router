import Vue from "vue"
import VueRouter from "vue-router"
import CharacterList from "@/views/CharacterList.vue"
import CharacterDetail from "@/views/CharacterDetail.vue"
import FileNotFound from "@/views/FileNotFound.vue"
import About from "@/views/About.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "character-list",
    component: CharacterList
  },
  {
    path: "/character/:id",
    name: "character-show",
    component: CharacterDetail,
    props: true
  },
  {
    path: "*",
    component: FileNotFound
  },
  {
    path: "/about",
    name: "about",
    component: About
  }
]

const router = new VueRouter({
  mode: "history", // tells vue to use browser history.pushState api to change the url without reloading the page, this is to remove the hash inside url
  routes
})

export default router
