<template>
  <div>
    <div class="page-header page-header-small clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img//bg_sunda.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="photo-container">
          <img src="img/adit.jpg" alt="" />
        </div>
        <h3 class="title">Alif Aditya Wicaksono</h3>
        <p class="category">Student</p>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="button-container">
          <a href="mailto:aditya0728@gmail.com?subject=Pertanyaan Seputar OCR Aksara Sunda" class="btn btn-primary btn-round btn-lg">Contact Me</a>
        </div>
        <h3 class="title">Tentang Saya</h3>
        <h5 class="description">
          Seorang mahasiswa Teknik Komputer ITS yang tertarik pada hardware dan coding.
          Up-to-date adalah motto hidupnya
        </h5>
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <h4 class="title text-center">Tentang OCR Aksara Sunda</h4>
            <h5 class="description">
          Proyek Aksara Sunda ini menggunakan metodologi CNN YOLO yang dapat mendeteksi aksara 
          dengan akurasi tinggi dan jelas untuk seluruh kebutuhan scanning OCR
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
