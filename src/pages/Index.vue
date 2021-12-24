<template>
  <div>
    <div class="page-header  clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/jawa_sunda.png')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <h1 class="h1-seo"><p style="color:white"><b>OCR<br>Aksara Jawa dan Sunda</b></p></h1>
        </div>
      </div>
    </div>
    <basic-elements></basic-elements>
    <aksara-components></aksara-components>
    <download-section></download-section>
  </div>
</template>
<script>
import { Parallax } from '@/components';
import BasicElements from './components/BasicElementsSection';
import DownloadSection from './components/DownloadSection';
import AksaraComponents from './components/Aksara';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    BasicElements,
    DownloadSection,
    AksaraComponents
  }
};
</script>
<style></style>
