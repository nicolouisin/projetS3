import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Contact from '@/components/Contact'
import Categories from "@/components/Categories";
import Categorie from "@/components/Categorie";
import Video from "@/components/Video";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Accueil', component: Accueil},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/categories', name: 'Categories', component: Categories},
    {path: '/categorie', name: 'Categorie', component: Categorie},
    {path: '/video', name: 'Video', component: Video},
  ]
})
