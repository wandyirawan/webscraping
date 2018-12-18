import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Detail from "./views/Detail.vue";
import List from "./views/List.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/linkdetails/:id",
      name: "detail",
      component: Detail
    },
    {
      path: "/listlink",
      name: "detail",
      component: List
    }
  ]
});
