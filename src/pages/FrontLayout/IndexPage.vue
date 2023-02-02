<template>
  <q-page class="flex flex-center">
    <!-- 首頁導覽 -->
    <div id="section01">
      <div class="row bg_area justify-center items-center">
        <div class="col col_area">
          <div class="col_block block1">
            <div class="textarea">
              <div class="text_number">
                #1
              </div>
              <div class="text_title">
                關於我們
              </div>
              <div class="text_description">
                桌上遊戲，讓我們拉近人與人的距離。
              </div>
            </div>
            <div class="btnarea q-mx-auto">
              <q-btn color="secondary" label="了解更多" />
            </div>
          </div>
        </div>
        <div class="col col_area">
          <div class="col_block block2">
            <div class="textarea">
              <div class="text_number">
                #2
              </div>
              <div class="text_title">
                立即預約
              </div>
              <div class="text_description">
                桌上遊戲，讓我們拉近人與人的距離。
              </div>
            </div>
            <div class="btnarea">
              <q-btn color="secondary" label="了解更多" />
            </div>
          </div>
        </div>
        <div class="col col_area">
          <div class="col_block block3">
            <div class="textarea">
              <div class="text_number">
                #3
              </div>
              <div class="text_title">
                二手專區
              </div>
              <div class="text_description">
                桌上遊戲，讓我們拉近人與人的距離。
              </div>
            </div>
            <div class="btnarea">
              <q-btn color="secondary" label="了解更多" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 最新公告 -->
    <div id="section02">
      <newsModle />
    </div>
    <!-- 活動訊息 -->
    <!-- 關於我們 -->
    <!-- 消費方式 -->
    <!-- 二手專區 -->
    <!-- 常見Q&A -->
  </q-page>
</template>

<script setup>
import newsModle from '../../components/newsModel.vue'
</script>
