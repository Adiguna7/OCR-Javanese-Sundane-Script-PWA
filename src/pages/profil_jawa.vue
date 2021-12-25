<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/bg_jawa.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="photo-container">
          <img src="img/suryo.jpg" alt="" />
        </div>
        <h3 class="title">Suryo Adiguna</h3>
        <p class="category">Student</p>
        <div class="content">
          <div class="social-description">
            <i class="now-ui-icons ui-1_email-85"></i><a href="mailto:suryoadiguna@gmail.com?subject=Pertanyaan Seputar OCR Aksara Jawa">suryoadiguna@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <h3 class="title">Tentang Saya</h3>
        <h5 class="description">
          Seorang mahasiswa Teknik Komputer ITS yang suka memecahkan masalah, elektronik digital, 
          dan visi komputer
        </h5>
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <h4 class="title text-center">Tentang OCR Aksara Jawa</h4>
            <h5 class="description">
          Proyek OCR Aksara Jawa ini menggunakan metodologi CNN dengan basis model 
          RESNET50 yang membuat model lebih baik daripada rata-rata model lain
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
