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
              disabled
              
            ></textarea>
            <textarea
              id="teks_latin"
              v-model="teks_latin"
              cols="38"
              rows="10"
              style="resize:none"
              placeholder="Hasil Aksara Latin di sini"
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
              <a href="mailto:suryoadiguna@gmail.com?subject=Bug Report OCR Aksara Jawa">
              <n-button type="danger">
              Report
              </n-button>
              </a>
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
        <br><br>
        <div>
              <span><b>Update</b></span>
              <blockquote>
                <p class="blockquote blockquote-primary">                  
                  V.alpha.1.0.0:
                  <ul>                    
                    <li>Detection work only on basic character and some of vocal character</li>
                    <li>Model use my own architecture adapted from resnet50</li>
                  </ul>
                  <b>
                    V.alpha.2.0.0 (Current Version)
                    <ul>
                      <li>Detection work on all character of javanese script, But use font "tuladha jejeg"</li>
                      <li>Can detection multiple languange (Bahasa + Javanese)</li>
                      <li>Accuracy for some character still bad, Somehow one character detect multiple times</li>
                      <li>Model use Resnet50 and LTSM</li>
                    </ul>
                  </b>
                  <br />
                  <br />
                  <small>
                    - Suryo Adiguna
                  </small>
                </p>
              </blockquote>
            </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, Modal } from "@/components";
import { Tooltip } from 'element-ui';
var FormData = require("form-data");
// var fs = require("fs");
export default {
  data: function() {
    return {
      modals: {
        classic: false
      },
      image: "",
      hasil_ocr: "",
      teks_latin: "",
      java2latn: {
        "ꦀ":'',//? -- archaic
        "ꦁ":'ng',//cecak
        "ꦂ":'r',//layar
        "ꦃ":'h',//wignyan
        "ꦄ":'A',//swara-A
        "ꦅ":'I',//I-Kawi -- archaic
        "ꦆ":'I',//I
        "ꦇ":'Ii',//Ii -- archaic
        "ꦈ":'U',//U
        "ꦉ":'rê',//pa cêrêk
        "ꦊ":'lê',//nga lêlêt
        "ꦋ":'lêu',//nga lêlêt Raswadi -- archaic
        "ꦌ":'E',//E
        "ꦍ":'Ai',//Ai
        "ꦎ":'O',//O
        
        "ꦏ":'ka',
        "ꦐ":'qa',//Ka Sasak
        "ꦑ":'kʰa',//Murda
        "ꦒ":'ga',
        "ꦓ":'gʰa',//Murda
        "ꦔ":'nga',//ṅa
        "ꦕ":'ca',
        "ꦖ":'cʰa',//Murda
        "ꦗ":'ja',
        "ꦘ":'Nya',//Ja Sasak, Nya Murda
        "ꦙ":'jʰa',//Ja Mahaprana
        "ꦚ":'nya',//ña 
        "ꦛ":'tha',//'ṭa',
        "ꦜ":'ṭʰa',//Murda
        "ꦝ":'dha',//'ḍa',
        "ꦞ":'ḍʰa',//Murda
        "ꦟ":'ṇa',//Murda
        "ꦠ":'ta',
        "ꦡ":'ṭa',//Murda
        "ꦢ":'da',
        "ꦣ":'ḍa',//Murda
        "ꦤ":'na',
        "ꦥ":'pa',
        "ꦦ":'pʰa',//Murda
        "ꦧ":'ba',
        "ꦨ":'bʰa',//Murda
        "ꦩ":'ma',
        "ꦪ":'ya',
        "ꦫ":'ra',
        "ꦬ":'Ra',//Ra Agung
        "ꦭ":'la',
        "ꦮ":'wa',
        "ꦯ":'śa',//Murda
        "ꦰ":'ṣa',//Sa Mahaprana
        "ꦱ":'sa',
        "ꦲ":'ha',//could also be "a" or any sandhangan swara
        
        "꦳":'​',//cecak telu -- diganti zero-width joiner (tmp)
        "ꦺꦴ":'o',//taling tarung
        "ꦴ":'a',
        "ꦶ":'i',
        "ꦷ":'ii',
        "ꦸ":'u',
        "ꦹ":'uu',
        "ꦺ":'e',
        "ꦻ":'ai',
        "ꦼ":'ê',
        "ꦽ":'rê',
        "ꦾ":'ya',
        "ꦿ":'ra',
        
        "꧀":'​',//pangkon -- diganti zero-width joiner (tmp)
        
        "꧁":'—',
        "꧂":'—',
        "꧃":'–',
        "꧄":'–',
        "꧅":'–',
        "꧆":'',
        "꧇":'​',//titik dua -- diganti zero-width joiner (tmp)
        "꧈":',',
        "꧉":'.',
        "꧊":'qqq',
        "꧋":'–',
        "꧌":'–',
        "꧍":'–',
        "ꧏ":'²',
        "꧐":'0',
        "꧑":'1',
        "꧒":'2',
        "꧓":'3',
        "꧔":'4',
        "꧕":'5',
        "꧖":'6',
        "꧗":'7',
        "꧘":'8',
        "꧙":'9',
        "꧞":'—',
        "꧟":'—',
        "​":'#',//zero-width joiner
        "​":' '//zero-width space
      },
      trans: null,
    };
  },
  name: "landing",
  bodyClass: "landing-page",
  components: {
    Modal,
    [Button.name]: Button,
    [Tooltip.name]: Tooltip
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
      var ocr = document.getElementById("teks_latin").value;
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
      this.teks_latin = "";
    },
    async upload(e) {
      const URL = "http://localhost:8000/image/upload";
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
      }else{
        const latin = this.transliterate(hasil)
        this.teks_latin = latin;
      }
      // console.log(this.java2latn["ꦁ"]);
      // const hc = require('hanacaraka');      
    },
    ganti(index, character) {
       return this.trans.substr(0, index) + character;// + this.substr(index+character.length);
    },
    ganti2(index, character) {
       return this.trans.substr(0, index-1) + character;// + this.substr(index+character.length);
    },
    ganti3(index, character) {
       return this.trans.substr(0, index-2) + character;// + this.substr(index+character.length);
    },
    capitalize(){
        return this.trans.charAt(0).toUpperCase() + this.trans.slice(1);
    },
    transliterate(aksara) {
            
      const str = aksara;        
  
      this.trans = str;
      for (var i = 0, j = 0; i < str.length; i++) {
          if (!this.java2latn[str[i]]) { //not Aksara Jawa
          this.trans = this.ganti(j, str[i]);j++;
        } else {
          /*if (str[i] == "ꦲ") { //ha
            /*if ( i > 0 && (str[i-1] == "ꦼ" || str[i-1] == "ꦺ" || str[i-1] == "ꦶ" || str[i-1] == "ꦴ" || str[i-1] == "ꦸ" || str[i-1] == "ꦄ" || str[i-1] == "ꦌ" || str[i-1] == "ꦆ" || str[i-1] == "ꦎ" || str[i-1] == "ꦈ" || 
            str[i-1] == "ꦿ" || str[i-1] == "ꦾ" || str[i-1] == "ꦽ") ) { 
                this.trans = this.ganti(j, "h"+this.java2latn[str[i]]);j+=2; 
            }
            if ( i > 0 && (str[i-1] == "꧊") ) { 
                this.trans = this.ganti(j, "H"+this.java2latn[str[i]]);j+=2; 
            } else { 
                this.trans = this.ganti(j, this.java2latn[str[i]]);j++; 
            //}
          } else */if (i > 0 && str[i] == "ꦫ" && str[i-1] == "ꦂ") { //double rr
            this.trans = this.ganti(j, "a");j++;
          } else if (i > 0 && str[i] == "ꦔ" && str[i-1] == "ꦁ") { //double ngng
            this.trans = this.ganti(j, "a");j++;
          } else if (str[i] == "ꦴ" || str[i] == "ꦶ" || str[i] == "ꦸ" || str[i] == "ꦺ" || str[i] == "ꦼ") {
            if (i > 2 && str[i-1] == "ꦲ" && str[i-2] == "ꦲ") { //-hah-
              if (str[i] == "ꦴ") this.trans = this.ganti3(j,"ā"); 
              else if (str[i] == "ꦶ") this.trans = this.ganti3(j,"ai"); 
              else if (str[i] == "ꦸ") this.trans = this.ganti3(j,"au"); 
              else if (str[i] == "ꦺ") this.trans = this.ganti3(j,"ae"); 
              else if (str[i] == "ꦼ") this.trans = this.ganti3(j,"aě"); 
              //str[i] == "ꦶ" || str[i] == "ꦸ" || str[i] == "ꦺ" || str[i] == "ꦼ"
            } 
            else if (i > 2 && str[i-1] == "ꦲ") { //-h-
              if (str[i] == "ꦴ") this.trans = this.ganti2(j,"ā"); 
              else if (str[i] == "ꦶ") this.trans = this.ganti2(j,"i"); 
              else if (str[i] == "ꦸ") this.trans = this.ganti2(j,"u");
              else if (str[i] == "ꦺ") this.trans = this.ganti2(j,"e"); 
              else if (str[i] == "ꦼ") this.trans = this.ganti2(j,"ě"); 
  //11-02            j--;
              //str[i] == "ꦶ" || str[i] == "ꦸ" || str[i] == "ꦺ" || str[i] == "ꦼ"
            }
            else /**/if (i > 0 && str[i] == "ꦴ" && str[i-1] == "ꦺ") //-o //2 aksara -> 1 huruf
              { this.trans = this.ganti2(j, "o"); }
            else if (i > 0 && str[i] == "ꦴ" && str[i-1] == "ꦻ") //-au //2 aksara -> 2 huruf
              { this.trans = this.ganti3(j, "au"); }
            else if (str[i] == "ꦴ") //-aa
              { this.trans = this.ganti(j, "aa"); j++; }
            else if ( i > 0 && (str[i] == "ꦶ" || str[i] == "ꦸ" || str[i] == "ꦺ" || str[i] == "ꦼ") && (str[i-1] == "ꦄ" || str[i-1] == "ꦌ" || str[i-1] == "ꦆ" || str[i-1] == "ꦎ" || str[i-1] == "ꦈ") )
              { this.trans = this.ganti(j, this.java2latn[str[i]]); j++; }
            else 
              { this.trans = this.ganti2(j, this.java2latn[str[i]]); }
          } else if (str[i] == "ꦽ" || str[i] == "ꦾ" || str[i] == "ꦿ" || str[i] == "ꦷ" || str[i] == "ꦹ" || str[i] == "ꦻ" || str[i] == "ꦇ" || str[i] == "ꦍ") { //1 aksara -> 2 huruf
            this.trans = this.ganti2(j, this.java2latn[str[i]]);j++;
          } else if (str[i] == "꦳") {//2 aksara -> 2 huruf
            if (i > 0 && str[i-1] == "ꦗ") { 
              if (i > 1 && str[i-2] == "꧊") { this.trans = this.ganti3(j, "Za"); }
              else { this.trans = this.ganti3(j, "za"); } }
            else if (i > 0 && str[i-1] == "ꦥ") { 
              if (i > 1 && str[i-2] == "꧊") { this.trans = this.ganti3(j, "Fa"); }
              else { this.trans = this.ganti3(j, "fa"); } }
            else if (i > 0 && str[i-1] == "ꦮ") { 
              if (i > 1 && str[i-2] == "꧊") { this.trans = this.ganti3(j, "Va"); }
              else { this.trans = this.ganti3(j, "va"); } }//catatan, "va" biasanya ditulis sama dengan "fa" (dengan pa+cecak telu), variannya adalah wa+cecak telu.
            else { this.trans = this.ganti2(j, this.java2latn[str[i]]); }
          } else if (str[i] == "꧀") {
            this.trans = this.ganti2(j, this.java2latn[str[i]]);
          } else if (i > 1 && str[i] == "ꦕ" &&  str[i-1] == "꧀" &&  str[i-2] == "ꦚ") { //nyj & nyc
            this.trans = this.ganti2(j-2, "nc");
          } else if (i > 1 && str[i] == "ꦗ" &&  str[i-1] == "꧀" &&  str[i-2] == "ꦚ") { //nyj & nyc
            this.trans = this.ganti2(j-2, "nj");
          } else if (str[i] == "ꦏ" || str[i] == "ꦐ" || str[i] == "ꦑ" || str[i] == "ꦒ" || str[i] == "ꦓ" || str[i] == "ꦕ" || str[i] == "ꦖ" || str[i] == "ꦗ" || str[i] == "ꦙ" || str[i] == "ꦟ" || str[i] == "ꦠ" || str[i] == "ꦡ" || str[i] == "ꦢ" || str[i] == "ꦣ" || str[i] == "ꦤ" || str[i] == "ꦥ" || str[i] == "ꦦ" || str[i] == "ꦧ" || str[i] == "ꦨ" || str[i] == "ꦩ" || str[i] == "ꦪ" || str[i] == "ꦫ" || str[i] == "ꦬ" || str[i] == "ꦭ" || str[i] == "ꦮ" || str[i] == "ꦯ" || str[i] == "ꦱ" || str[i] == "ꦉ" || str[i] == "ꦊ" || str[i] == "ꦁ" || str[i] == "ꦲ") {
            if (i > 0 && str[i-1] == "꧊") {
              if (str[i] == "ꦐ") { this.trans = this.ganti(j, "Qa");j+=2; }
              else if (str[i] == "ꦧ" || str[i] == "ꦨ") { this.trans = this.ganti(j, "Ba");j+=2; }
              else if (str[i] == "ꦕ" || str[i] == "ꦖ") { this.trans = this.ganti(j, "Ca");j+=2; }
              else if (str[i] == "ꦢ" || str[i] == "ꦣ") { this.trans = this.ganti(j, "Da");j+=2; }
              else if (str[i] == "ꦒ" || str[i] == "ꦓ") { this.trans = this.ganti(j, "Ga");j+=2; }
              else if (str[i] == "ꦲ") { 
                    if ( i > 0 && (str[i-1] == "ꦼ" || str[i-1] == "ꦺ" || str[i-1] == "ꦶ" || str[i-1] == "ꦴ" || str[i-1] == "ꦸ" || str[i-1] == "ꦄ" || str[i-1] == "ꦌ" || str[i-1] == "ꦆ" || str[i-1] == "ꦎ" || str[i-1] == "ꦈ" || 
                    str[i-1] == "ꦿ" || str[i-1] == "ꦾ" || str[i-1] == "ꦽ") ) { 
                        this.trans = this.ganti(j, "h"+this.java2latn[str[i]]);j+=2; 
                    }
                    if ( i > 0 && (str[i-1] == "꧊") ) { 
                        this.trans = this.ganti(j, "H"+this.java2latn[str[i]]);j+=2; 
                    } else { 
                        this.trans = this.ganti(j, "@"+this.java2latn[str[i]]);j+=2; 
                    }
                  //this.trans = this.ganti(j, "Ha");j+=2; 
              }
              else if (str[i] == "ꦗ" || str[i] == "ꦙ") { this.trans = this.ganti(j, "Ja");j+=2; }
              else if (str[i] == "ꦏ" || str[i] == "ꦑ") { this.trans = this.ganti(j, "Ka");j+=2; }
              else if (str[i] == "ꦭ") { this.trans = this.ganti(j, "La");j+=2; }
              else if (str[i] == "ꦩ") { this.trans = this.ganti(j, "Ma");j+=2; }
              else if (str[i] == "ꦤ" || str[i] == "ꦟ") { this.trans = this.ganti(j, "Na");j+=2; }
              else if (str[i] == "ꦥ" || str[i] == "ꦦ") { this.trans = this.ganti(j, "Pa");j+=2; }
              else if (str[i] == "ꦫ" || str[i] == "ꦬ") { this.trans = this.ganti(j, "Ra");j+=2; }
              else if (str[i] == "ꦱ" || str[i] == "ꦯ") { this.trans = this.ganti(j, "Sa");j+=2; }
              else if (str[i] == "ꦠ" || str[i] == "ꦡ") { this.trans = this.ganti(j, "Ta");j+=2; }
              else if (str[i] == "ꦮ") { this.trans = this.ganti(j, "Wa");j+=2; }
              else if (str[i] == "ꦪ") { this.trans = this.ganti(j, "Ya");j+=2; }
              else { this.ganti(j, this.java2latn[str[i]]);j+=3; }
            } else if (str[i] == "ꦑ" || str[i] == "ꦓ" || str[i] == "ꦖ" || str[i] == "ꦙ" || str[i] == "ꦡ" || str[i] == "ꦣ" || str[i] == "ꦦ" || str[i] == "ꦨ" || str[i] == "ꦯ") {//bha, cha, dha, dll.
              this.trans = this.ganti(j, this.java2latn[str[i]]);j+=3;
            } else if (str[i] == "ꦲ" && (i == 0 || [" ", "​", "꧀", "꦳", "ꦴ", "ꦶ", "ꦷ", "ꦸ", "ꦹ", "ꦺ", "ꦻ", "ꦼ", "ꦽ", "ꦾ", "ꦿ"].indexOf(str[i-1]) >= 0)) { //ha, preceeded by space or zws or open vowel
                this.trans = this.ganti(j, "_a");j+=2; 
            } else {//ba, ca, da, dll.
              this.trans = this.ganti(j, this.java2latn[str[i]]);j+=2; }
          } else if (str[i] == "ꦰ") { //ṣa
            this.trans = this.ganti(j, this.java2latn[str[i]]);j+=2;
          } else if (str[i] == "ꦔ" || str[i] == "ꦘ" || str[i] == "ꦚ" || str[i] == "ꦛ" || str[i] == "ꦜ" || str[i] == "ꦝ" || str[i] == "ꦞ" || str[i] == "ꦋ") {
            if (i > 0 && str[i-1] == "꧊") {
              if (str[i] == "ꦔ") { this.trans = this.ganti(j, "Nga");j+=3; }
              else if (str[i] == "ꦚ" || str[i] == "ꦘ") { this.trans = this.ganti(j, "Nya");j+=3; }
              else if (str[i] == "ꦛ" || str[i] == "ꦜ") { this.trans = this.ganti(j, "Tha");j+=3; }
              else if (str[i] == "ꦝ" || str[i] == "ꦞ") { this.trans = this.ganti(j, "Dha");j+=3; }
              else { this.ganti(j, this.java2latn[str[i]]);j+=3; }
            } else {
              this.trans = this.ganti(j, this.java2latn[str[i]]);j+=3; }
          /*} else if (str[i] == "꧈" || str[i] == "꧉") { // habis titik atau koma diberi spasi
            this.trans = this.ganti(j, this.java2latn[str[i]]+" ");j+=2;*/
          } else if (str[i] == "꧊") { //penanda nama diri -- made up for Latin back-compat
            this.trans = this.ganti(j, "");
          } else if (str[i] == " ") {
            this.trans = this.ganti(j, " ");j++;
          } else {
            this.trans = this.ganti(j, this.java2latn[str[i]]);j++;
            //this.trans = this.ganti(j, "@");j++;
          }
  
        }
      }
  
      return this.trans;
    }
  },
};
</script>
<style></style>
