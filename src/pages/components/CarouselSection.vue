<template>
  <div id="carousel">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8">
          <el-carousel height="300px">
            <el-carousel-item>
              <div class=figure>
                <div class="container">
                  <div class="center">
                    <a href="img/hunucuruku.png" download>
                      <el-tooltip
                        class="item"
                        content="Download Gambar"
                        placement="bottom"
                      >
                    <img class="d-block" src="img/hunucuruku.png" alt="First slide"/>
                    </el-tooltip>
                    </a>
                  </div>
                </div>
              </div>
              <div class="content">
                <p>Full Aksara Jawa</p>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class=figure>
                <div class="container">
                  <div class="center">
                    <a href="img/testjejeglengkap.png" download>
                      <el-tooltip
                        class="item"
                        content="Download Gambar"
                        placement="right"
                      >
                      <img class="d-block" src="img/testjejeglengkap.png" alt="First slide" />
                      </el-tooltip>
                    </a>
                  </div>
                </div>
              </div>
              <div class="content">
                <p>Full Aksara Jawa</p>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class=figure>
                <div class="container">
                  <div class="center">
                    <a href="img/testaksara.png" download>
                      <el-tooltip
                        class="item"
                        content="Download Gambar"
                        placement="left"
                      >
                      <img class="d-block" src="img/testaksara.png" alt="First slide" />
                      </el-tooltip>
                    </a>
                  </div>
                </div>
              </div>
              <div class="content">
                <p>Aksara Jawa + Indonesia</p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, CarouselItem, Tooltip } from 'element-ui';

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Tooltip.name]: Tooltip
  }
};
</script>
<style>
div.figure {
  float: right;
  width: 100%;
  height: 100%;
  text-indent: 0;
  border: thin silver solid;
  padding: 0.5em;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
}
img.scaled {
  width: 100%;
}
.container .content {
  position: absolute; /* Position the background text */
  font-style: italic;
  bottom: 0; /* At the bottom. Use top:0 to append it to the top */
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
  color: #f1f1f1; /* Grey text */
  width: 100%; /* Full width */
  padding: 20px; /* Some padding */
}
</style>
