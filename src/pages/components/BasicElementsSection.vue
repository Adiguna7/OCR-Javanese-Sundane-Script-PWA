<template>
  <div class="section section-basic" id="basic-elements">
    <div class="container">
      <h3 class="title">Kategori</h3>
        <div class="row">
            <div v-popover:jawa class="column" style="
              float: left;
              width: 50%;
              padding: 5px;">
              <div class="container" style="position: relative;">
                <img src="img/aksara-jawa.jpg" alt="aksara jawa" usemap="#workmap">
                  <div class="text-block" style="
                    position: absolute;
                    bottom: 1;
                    color: #f1f1f1;
                    width: 30%;">
                    <h4 style="text-align: center; color:black;"><b>Aksara Jawa</b></h4>
                  </div>
              </div>
              <map name="workmap">
                <area shape="rect" coords="0,0,341,340" alt="aksara jawa" href="#/ocr_jawa">
                <el-popover
                    ref="jawa"
                    popper-class="popover"
                    placement="bottom"
                    width="155"
                    trigger="hover"
                    >
                     <div class="popover-body">
                      OCR Aksara Jawa
                    </div>
                    </el-popover>
              </map>
            </div>
            <div v-popover:sunda class="column" style="
              float: right;
              width: 50%;
              padding: 5px;">
              <div class="container" style="position: relative;">
                <img src="img/aksara-sunda.png" alt="aksara sunda" usemap="#map_sunda">
                <div class="text-block" style="
                  position: absolute;
                  bottom: 1;
                  color: #f1f1f1;
                  width: 30%;">
                  <h4 style="text-align: center; color:black;"><b>Aksara Sunda</b></h4>
                </div>
              </div>
              <map name="map_sunda">
                <area shape="rect" coords="0,0,341,340" alt="aksara sunda" href="#/ocr_sunda">
                <el-popover
                    ref="sunda"
                    popper-class="popover"
                    placement="bottom"
                    width="163"
                    trigger="hover"
                    >
                     <div class="popover-body">
                      OCR Aksara Sunda
                    </div>
                    </el-popover>
              </map>
            </div>
        </div>
      <div class="space-70"></div>
    </div>
  </div>
</template>
<script>
import { Popover } from 'element-ui';
export default {
  components: {
    [Popover.name]: Popover
  }
};
</script>
<style></style>
