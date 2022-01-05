<template>
  <div>
    <div class="page-header page-header-small clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/jawa_sunda.png')"
      >
      </parallax>
      <div class="container">
        <div class="photo-container">
          <img src="img/yesaya.png" alt="" />
        </div>
        <h3 class="title">Yesaya Kharismael Kurniawan Putra</h3>
        <p class="category">Student</p>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="button-container">
          <a href="mailto:yesayakharisma10@gmail.com?subject=Pertanyaan Seputar Web OCR" class="btn btn-primary btn-round btn-lg">Contact Me</a>
        </div>
        <h3 class="title">Tentang Saya</h3>
        <h5 class="description">
          Seorang Mahasiswa Teknik Komputer ITS yang suka explore hal-hal baru 
          terutama di bidang teknologi. Cari sampai dapat adalah motto hidupnya
        </h5>
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <h4 class="title text-center">Tentang Web OCR</h4>
            <h5 class="description">
          Proyek Web ini menggunakan metodologi PWA dengan framework VueJs sebagai Front End
          dan FastAPI sebagai Back End
          </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'profile',
  bodyClass: 'profile-page',
  components: {
  }
};
</script>
<style></style>
