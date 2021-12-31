<template>
  <div class="section section-tabs">
    <div class="container">
      <div class="title">
        <h4>Seputar Aksara</h4>
      </div>
      <div class="row">
        <div class="col-md-10 ml-auto col-xl-6 mr-auto">
          <p class="category">Aksara Jawa</p>
          <!-- Nav tabs -->
          <card>
            <tabs
              slot="raw-content"
              tab-content-classes="tab-content-padding text-center"
            >
              <tab-pane>
                <template slot="label">
                  <i class="now-ui-icons education_glasses"></i> Tentang
                </template>
                <p>
                  Aksara Jawa, juga dikenal sebagai Hanacaraka, Carakan,
                  atau Dentawyanjana, adalah salah satu aksara tradisional 
                  Indonesia yang berkembang di pulau Jawa. Aksara ini terutama 
                  digunakan untuk menulis bahasa Jawa, tetapi dalam perkembangannya 
                  juga digunakan untuk menulis beberapa bahasa daerah lainnya seperti 
                  bahasa Sunda, Madura, Sasak, dan Melayu, serta bahasa historis seperti 
                  Sanskerta dan Kawi. Aksara Jawa merupakan turunan dari aksara Brahmi 
                  India melalui perantara aksara Kawi dan berkerabat dekat dengan aksara Bali. 
                </p>
              </tab-pane>
              <tab-pane>
                <template slot="label">
                  <i class="now-ui-icons files_paper"></i> Peninggalan
                </template>
                <p>
                   <img src="img/peninggalan_jawa.jpg" alt="peninggalan jawa">
                    <br>
                    <b>Serat Yusuf dalam naskah kertas</b>, 
                    <br>
                    koleksi Museum Sonobudoyo
                </p>
              </tab-pane>
              <tab-pane>
                <template slot="label">
                  <i class="now-ui-icons location_map-big"></i> Wilayah
                </template>
                <p>
                    <img src="img/peta_jawa.jpg" alt="wilayah jawa">
                    <br>
                    <b>Peta Persebaran Bahasa Jawa</b>
                    <br>
                    Sebagian besar berada di daerah Provinsi Jawa Tengah dan Jawa Timur
                </p>
              </tab-pane>
            </tabs>
          </card>
        </div>
        <div class="col-md-10 ml-auto col-xl-6 mr-auto">
          <p class="category">Aksara Sunda</p>
          <!-- Tabs with Background on Card -->
          <div class="card">
            <tabs
              centered
              type="neutral"
              tab-nav-wrapper-classes="card-header"
              tab-content-classes="card-body text-center"
              data-background-color="orange"
            >
              <tab-pane>
                <template slot="label">
                  <i class="now-ui-icons education_glasses"></i> Tentang
                </template>
                <p>
                  Aksara Sunda merupakan salah satu aksara berumpun Brahmi yang 
                  diturunkan dari aksara Pallawa lewat aksara Kawi. Bukti-bukti 
                  tertulis mengenai evolusi aksara ini muncul di beberapa prasasti 
                  yang ditemukan dari abad ke-10 (era kerajaan Mataram Kuno) hingga 
                  abad ke-15 M pada masa keemasan Kerajaan Pajajaran. Prasasti yang 
                  diyakini merupakan kunci evolusi aksara Sunda adalah Prasasti Batutulis,
                  Prasasti Astana Gede, dan Prasasti Kebantenan.
                </p>
              </tab-pane>
              <tab-pane>
                <template slot="label">
                  <i class="now-ui-icons files_paper"></i> Peninggalan
                </template>
                <p>
                  <img src="img/peninggalan_sunda.jpg" alt="peninggalan sunda">
                    <br>
                    <b>Naskah Waruga Guru </b>
                    <br>
                    ditulis menggunakan aksara Sunda kuno
                </p>
              </tab-pane>
              <tab-pane>
                <template slot="label">
                  <i class="now-ui-icons location_map-big"></i> Wilayah
                </template>
                <p>
                    <img src="img/peta_sunda.png" alt="wilayah sunda">
                    <br>
                    <b>Peta Persebaran Bahasa Sunda</b>
                    <br>
                    Sebagian besar berada di Provinsi Jawa Barat
                </p>
              </tab-pane>
            </tabs>
          </div>
          <!-- End Tabs on plain Card -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Tabs, TabPane } from '@/components';

export default {
  components: {
    Card,
    Tabs,
    TabPane
  }
};
</script>
<style>
.tab-content.tab-content-padding {
  padding: 20px;
}
</style>
