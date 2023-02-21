<template>
  <q-page class="flex flex-center">
    <!-- 首頁導覽 -->
    <div id="section01" class="section">
      <div ref="bgArea" class="row bg_area justify-center items-center">
        <div class="col col_area">
          <div ref="block1" class="col_block block1">
            <div class="textarea">
              <div class="text_number">
                #1
              </div>
              <div class="text_title">
                關於我們
              </div>
            </div>
            <div class="infoarea q-mx-auto">
              <div class="info_description">
                桌上遊戲，讓我們拉近人與人的距離。
              </div>
              <div class="info_btn q-mx-auto">
                <q-btn color="secondary" label="了解更多" />
              </div>
            </div>
          </div>
        </div>
        <div class="col col_area">
          <div ref="block2" class="col_block block2">
            <div class="textarea">
              <div class="text_number">
                #2
              </div>
              <div class="text_title">
                立即預約
              </div>
            </div>
            <div class="infoarea q-mx-auto">
              <div class="info_description">
                桌上遊戲，讓我們拉近人與人的距離。
              </div>
              <div class="info_btn q-mx-auto">
                <q-btn color="secondary" label="了解更多" />
              </div>
            </div>
          </div>
        </div>
        <div class="col col_area">
          <div ref="block3" class="col_block block3">
            <div class="textarea">
              <div class="text_number">
                #3
              </div>
              <div class="text_title">
                二手專區
              </div>
            </div>
            <div class="infoarea q-mx-auto">
              <div class="info_description">
                桌上遊戲，讓我們拉近人與人的距離。
              </div>
              <div class="info_btn q-mx-auto">
                <q-btn color="secondary" label="了解更多" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 最新公告 -->
    <div id="section02" class="section">
      <newsModle :news="news" />
    </div>
    <!-- 活動訊息 -->
    <div id="section03" class="section">
      <h1>活動訊息</h1>
    </div>
    <!-- 關於我們 -->
    <div id="section04" class="section">
      <h1>關於我們</h1>
    </div>
    <!-- 消費方式 -->
    <div id="section05" class="section">
      <h1>消費方式</h1>
    </div>
    <!-- 二手專區 -->
    <div id="section06" class="section">
      <h1>二手專區</h1>
    </div>
    <!-- 常見Q&A -->
    <div id="section07" class="section">
      <h1>常見Q&A</h1>
    </div>
  </q-page>
</template>

<script setup>
import newsModle from '../../components/newsModel.vue'
import { ref, reactive, onMounted } from 'vue'
import { api } from '@/boot/axios.js'
import { useQuasar } from 'quasar'

const $q = useQuasar()

// 處理大圖動畫
const bgArea = ref(null)
const block1 = ref(null)
const block2 = ref(null)
const block3 = ref(null)

onMounted(() => {
  console.log(bgArea.value.style.backgroundImage)
})

// 載入最新公告
const news = reactive([]);
(async () => {
  try {
    const { data } = await api.get('/news')
    news.push(...data.result)
  } catch (error) {
    $q.notify({
      position: 'top',
      message: error?.response?.data?.message || '發生錯誤',
      color: 'negative'
    })
  }
})()

// const imgs = reactive([
//   { src: '../assets/amusement-g9784a5c17_1920.jpg' },
//   { src: '../assets/woman-gcf8d87f22_1920.jpg' },
//   { src: '../assets/smiley-g0b434d373_1920.jpg' }
// ])

</script>
