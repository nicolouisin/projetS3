import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Contact from '@/components/Contact'
import Categories from "@/components/Categories";
import Categorie from "@/components/Categorie";
import Video from "@/components/Video";
import Politique from "@/components/Politique";
import Mentions from "@/components/Mentions";

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {path: '/', name: 'Accueil', component: Accueil},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/categories', name: 'Categories', component: Categories},
    {path: '/categorie', name: 'Categorie', component: Categorie},
    {path: '/video/:id', name: 'Video', component: Video},
    {path: '/politique-de-confidentialite', name: 'Politique', component: Politique},
    {path: '/mentions-legales', name: 'Mentions', component: Mentions},
  ]
})
