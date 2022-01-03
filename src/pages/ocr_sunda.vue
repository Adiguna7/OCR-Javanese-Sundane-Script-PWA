<template>
    <div>
      <div id="ocrSunda">
      <div class="loader" v-if="loading"></div>
      <div class="page-header page-header-small clear-filter" filter-color="orange">
        <parallax
          class="page-header-image"
          style="background-image: url('img/bg_sunda.jpg')"
        >
        </parallax>
        <div class="content-center">
          <div class="container">
            <h1 class="title">OCR Aksara Sunda</h1>
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
              <fieldset :disabled="loading">
              <h2 class="title">OCR Aksara Sunda</h2>
              <!-- <label for="myfile"><b>Select a file:</b></label> -->
              <br>
              <div id="app">
              <div v-if="!image">
              <h2>Select an Image</h2>
              <input type="file" accept=".jpeg, .jpg, .png" @change="onFileChange" style=
                "border: 1px solid #ccc;
                display: inline-block;
                padding: 6px 12px;
                cursor: pointer;">
                </div>
                <div v-else>
                <img :src="image" style=
                "border: 2px solid #000;
                display: inline-block;
                width: 410px;
                padding: 6px 12px;"/>
                <br>
                  <el-tooltip
                   class="item"
                   content="Hapus gambar terpilih"
                   placement="left"
                  >
                  <n-button type="danger" @click="removeImage()"><b>Remove</b></n-button>
                  </el-tooltip>
                </div>
              </div>
              <br>
              <label for="result"><b>Hasil OCR:</b></label>
              <br>
              <textarea id="hasil_ocr" v-model="hasil_ocr" cols="38" rows="10" style="resize:none" placeholder="Hasil OCR di sini" disabled="true"></textarea>
              <br>
              <el-tooltip
                class="item"
                content="Putar suara"
                placement="left"
              >
              <n-button type="primary" @click="play()"><b>Play</b></n-button>
              </el-tooltip>
              <el-tooltip
              class="item"
              content="Informasi Aksara"
              placement="bottom"
              >
              <n-button type="info" @click.native="modals.classic = true">Info</n-button>
              </el-tooltip>
              <el-tooltip
              class="item"
              content="Report bug"
              placement="right"
              >
              <a href="mailto:aditya0728@gmail.com?subject=Bug Report OCR Aksara Sunda">
              <n-button type="danger">Report</n-button>
              </a>
              </el-tooltip>
              </fieldset>
            </div>
          </div>
          <div class="separator separator-primary"></div>
          <modal :show.sync="modals.classic" headerClasses="justify-content-center">
            <h4 slot="header" class="title title-up">Aksara Sunda</h4>
            <p>
              <img src="img/aksara_swara.png" alt="aksara sunda">
              <img src="img/aksara_ngagalena.png" alt="aksara sunda">
              <img src="img/Rarangkén_1.png" alt="aksara sunda">
              <img src="img/Rarangkén_2.png" alt="aksara sunda">
              <img src="img/Rarangkén_3.png" alt="aksara sunda">
              <img src="img/angka_sunda.png" alt="aksara sunda">
            </p>
            <template slot="footer">
              <n-button type="danger" @click.native="modals.classic = false"
                >Close</n-button
              >
            </template>
          </modal>
          <br><br>
          <div>
              <h4 class="title">Update</h4>
              <blockquote>
                <p class="blockquote blockquote-primary">
                 v.1 Beta 1.0: Aksara Sunda dapat terdeteksi akan tetapi masih tergantung scaling ukuran
                  <br />
                  <br />
                  <small>
                    - AAW
                  </small>
                </p>
              </blockquote>
            </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import { Button, Modal } from '@/components';
import { Tooltip } from 'element-ui';
var FormData = require('form-data');
var fs = require('fs');
export default {
  name: 'form-loading-spinner-example',
  data: function() {
      return {
        loading: false,
        modals: {
        classic: false
        },
        image: '',
        hasil_ocr: ''
      }
    },
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    Modal,
    [Button.name]: Button,
    [Tooltip.name]: Tooltip
  },
   mounted () {
    let TTS = document.createElement('script')
    TTS.setAttribute('src', 'https://code.responsivevoice.org/responsivevoice.js')
    document.head.appendChild(TTS)
  },
  methods: {
     play (){
      var ocr = document.getElementById('hasil_ocr').value;
      if (ocr) {
        responsiveVoice.setDefaultVoice("Indonesian Female");
        responsiveVoice.speak(ocr)
      }
      setTimeout(() => ocr, 1000)
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
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
     removeImage: function (e) {
      this.image = '';
      this.hasil_ocr ='';
    },
    async upload(e) {
    this.loading = true
    const URL = 'https://webocr.eastasia.cloudapp.azure.com:8080/api/sunda/string/'; 
    let data = new FormData();
    data.append('name', 'my-picture');
    data.append('file', e); 
    let config = {
      method: "POST",
      header : {
        'Content-Type' : 'multipart/form-data'
      },
      body: data
    }
    const response = await fetch(URL, config);
    const responsedata = await response.json();
    var hasil = responsedata["OCR STRING"];
    this.loading =  false;
     if(!hasil || hasil== "\n" )
      {
        this.hasil_ocr = "Aksara Sunda tidak terdeteksi pada image Anda. Mohon diperiksa kembali"
      }else{
        this.hasil_ocr = hasil;
      }      
   },
  },
};
</script>
<style scoped>
#ocrSunda{  /* Components Root Element ID */
    position: relative;
}
.loader{  /* Loader Div Class */
    position: absolute;
    top:0px;
    right:0px;
    width:100%;
    height:100%;
    background-color:#eceaea;
    background-image: url('../../public/img/loader.gif');
    background-size: 200px;
    background-repeat:no-repeat;
    background-position:center;
    z-index:10000000;
    opacity: 0.4;
    filter: alpha(opacity=40);
}
</style>