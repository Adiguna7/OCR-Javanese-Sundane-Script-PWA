<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:home class="navbar-brand" to="/">
        Beranda
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
      </li>
      <drop-down
        tag="li"
        title="Kategori"
        icon="now-ui-icons design_app"
        class="nav-item"
      >
        <nav-link to="/ocr_jawa">
          <i class="now-ui-icons education_paper"></i> Aksara Jawa
        </nav-link>
        <nav-link to="/ocr_sunda">
          <i class="now-ui-icons education_paper"></i> Aksara Sunda
        </nav-link>
      </drop-down>
      <drop-down
        tag="li"
        title="About Us"
        icon="now-ui-icons users_single-02"
        class="nav-item"
      >
        <nav-link to="/profil_jawa">
          <i class="now-ui-icons education_paper"></i> Aksara Jawa
        </nav-link>
        <nav-link to="/profil_sunda">
          <i class="now-ui-icons education_paper"></i> Aksara Sunda
        </nav-link>
        <nav-link to="/profil_web">
          <i class="now-ui-icons business_globe"></i> Web
        </nav-link>
      </drop-down>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Github"
          data-placement="bottom"
          href="https://github.com/Adiguna7/OCR-Javanese-Sundane-Script-PWA"
          target="_blank"
        >
          <i class="fab fa-github"></i>
          <p class="d-lg-none d-xl-none">Github</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
