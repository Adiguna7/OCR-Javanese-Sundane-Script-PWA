<template>
  <div>
    <div class="page-header page-header-small clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg_jawa.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">OCR Aksara Jawa</h1>
          <div class="text-center">
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">OCR Aksara Jawa</h2>
            <!-- <label for="myfile"><b>Select a file:</b></label> -->
            <br />
            <div id="app">
              <div v-if="!image">
                <h2>Select an Image</h2>
                <input
                  type="file"
                  accept=".jpeg, .jpg, .png"
                  @change="onFileChange"
                  style="border: 1px solid #ccc;
                display: inline-block;
                padding: 6px 12px;
                cursor: pointer;"
                />
              </div>
              <div v-else>
                <img
                  :src="image"
                  style="border: 2px solid #000;
                display: inline-block;
                width: 410px;
                padding: 6px 12px;"
                />
                <br />
                <el-tooltip
                   class="item"
                   content="Hapus gambar terpilih"
                   placement="left"
                >
                <n-button type="danger" @click="removeImage()"><b>Remove</b></n-button>
                </el-tooltip>
              </div>
            </div>
            <br />
            <label for="result"><b>Hasil OCR:</b></label>
            <br />
            <textarea
              id="hasil_ocr"
              v-model="hasil_ocr"
              cols="38"
              rows="10"
              style="resize:none"
              placeholder="Hasil OCR di sini"
              disabled="true"
            ></textarea>
            <br>
            <el-tooltip
              class="item"
              content="Putar suara"
              placement="left"
            >
            <n-button  type="success" @click="play()"><b>Play</b></n-button>
            </el-tooltip>
            <n-button type="info" @click.native="modals.classic = true">
            Info
            </n-button>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <modal :show.sync="modals.classic" headerClasses="justify-content-center">
            <h4 slot="header" class="title title-up">Aksara Jawa</h4>
            <p>
              <img src="img/jawa/aksara_carakan.png" alt="aksara jawa">
              <img src="img/jawa/aksara_pasangan(mati).png" alt="aksara jawa">
              <img src="img/jawa/aksara_pasangan.png" alt="aksara jawa">
              <img src="img/jawa/aksara_murda.png" alt="aksara jawa">
              <img src="img/jawa/aksara_swara.png" alt="aksara jawa">
              <img src="img/jawa/aksara_sandangan.png" alt="aksara jawa">
              <img src="img/jawa/aksara_rekan .png" alt="aksara jawa">
              <img src="img/jawa/aksara_angka.png" alt="aksara jawa">
            </p>
            <template slot="footer">
              <n-button type="danger" @click.native="modals.classic = false"
                >Close</n-button
              >
            </template>
        </modal>
      </div>
       <signup-form></signup-form>
    </div>
  </div>
</template>
<script>
import { Button, Modal } from "@/components";
import { Tooltip } from 'element-ui';
import SignupForm from './components/SignupForm';
var FormData = require("form-data");
var fs = require("fs");
export default {
  data: function() {
    return {
      modals: {
        classic: false
      },
      image: "",
      hasil_ocr: "",
    };
  },
  name: "landing",
  bodyClass: "landing-page",
  components: {
    Modal,
    [Button.name]: Button,
    [Tooltip.name]: Tooltip,
    SignupForm
  },
  mounted() {
    let TTS = document.createElement("script");
    TTS.setAttribute(
      "src",
      "https://code.responsivevoice.org/responsivevoice.js"
    );
    document.head.appendChild(TTS);
  },
  methods: {
    async play() {
      var ocr = document.getElementById("hasil_ocr").value;
      if (ocr) {
        responsiveVoice.setDefaultVoice("Indonesian Female");
        responsiveVoice.speak(ocr);
      }
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
      this.upload(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(e) {
      this.image = "";
      this.hasil_ocr = "";
    },
    async upload(e) {
      const URL = "http://192.168.8.100:8000/image/upload";
      let data = new FormData();
      data.append("name", "my-picture");
      data.append("file", e);
      let config = {
        method: "POST",
        header: {
          "Content-Type": "multipart/form-data",
        },
        body: data,
      };
      const response = await fetch(URL, config);
      const responsedata = await response.json();
      var hasil = responsedata["message"];
      this.hasil_ocr = hasil;
       if(!hasil || hasil== "\n" )
      {
        this.hasil_ocr = "Aksara Jawa tidak terdeteksi pada image Anda. Mohon diperiksa kembali"
      }else
      console.log(hasil);
    },
  },
};
</script>
<style></style>
