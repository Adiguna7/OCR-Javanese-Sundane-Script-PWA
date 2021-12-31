import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Jawa from './pages/ocr_jawa.vue';
import Login from './pages/ocr_sunda.vue';
import Profil_Jawa from './pages/profil_jawa.vue';
import Profil_Sunda from './pages/profil_sunda.vue';
import Profil_Web from './pages/profil_web.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/ocr_jawa',
      name: 'ocr_jawa',
      components: { default: Jawa, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/ocr_sunda',
      name: 'ocr_sunda',
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/profil_jawa',
      name: 'profil_jawa',
      components: { default: Profil_Jawa, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/profil_sunda',
      name: 'profil_sunda',
      components: { default: Profil_Sunda, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/profil_web',
      name: 'profil_web',
      components: { default: Profil_Web, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
