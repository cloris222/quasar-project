<template>
  <div id="IndexView">
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
                  立即預約
                </div>
              </div>
              <div class="infoarea q-mx-auto">
                <div class="info_description">
                  桌上遊戲，讓我們拉近人與人的距離。
                </div>
                <div class="info_btn q-mx-auto">
                  <q-btn color="secondary" label="來去預約" to="/orders" />
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
                  二手專區
                </div>
              </div>
              <div class="infoarea q-mx-auto">
                <div class="info_description">
                  想玩的，想看的，這裡通通有
                </div>
                <div class="info_btn q-mx-auto">
                  <q-btn color="secondary" label="來去逛逛" to="/shoppingMall" />
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
                  常見Q&A
                </div>
              </div>
              <div class="infoarea q-mx-auto">
                <div class="info_description">
                  疑難雜症懶人包，請安心服用
                </div>
                <div class="info_btn q-mx-auto">
                  <q-btn color="secondary" label="我有疑問" to="/QA" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 最新公告 -->
      <div id="section02" class="section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="bigTitle">
                最新公告
              </div>
            </div>
            <div class="col-12 news_area">
              <newsModle :news="news" />
            </div>
          </div>
        </div>
      </div>
      <!-- 關於我們 -->
      <div id="section03" class="section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="bigTitle">
                關於桌下吧
              </div>
            </div>
          </div>
          <div class="row q-my-xl">
            <div class="col-12">
              <div class="info_area1">
                <div class="info_title">
                  桌上遊戲，讓我們拉近人與人的距離。
                </div>
                <div class="info_content">
                  不論是跟同學們一起聚會、跟同事Team Building、或是同家人在節日聚在一起。
                  桌遊總能讓我們更靠近彼此。也是新世代年輕人休閒娛樂一個新的選擇。
                  <br>
                  <br>
                  企鵝老闆擁有4年以上在桌遊店工作的經驗，於2020年底成立了玩聚空間這個品牌。
                  並在2021年1月23日正式開始營業。
                </div>
              </div>
              <div class="img_area1">
                <img src="@/assets/關於我們/about1.jpg">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="info_area2">
                <div class="info_content">
                  本店選址在泰山區致遠新村，捷運丹鳳站附近。
                  <br>
                  距離捷運站僅需步行6分鐘。靠近明志科大與輔仁大學。
                  <br>
                  店內有300款精選開盒遊戲供遊玩。除一般方案外 ; 無教學方案給開團主或學生更優惠的價格。
                  <br>
                  學生假日玩整天只要270元，平日更只需180元就可以暢玩10小時。
                  <br>
                  本店的使命是提供人們休閒放鬆的舒適空間，秉持這個理念熱誠的對待每一位來店內拜訪的座上賓。
                </div>
                <div class="info_btn">
                  <q-btn label="前往預約" to="/orders" outline size="lg" />
                </div>
              </div>
              <div class="img_area2">
                <img src="@/assets/關於我們/about2.jpg">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 店內桌遊&二手專區 -->
      <div id="section04" class="section">
        <q-parallax
          src="@/assets/qa/qabg7.jpg"
        >
          <div class="container">
            <div class="row">
              <div class="col-6">
                <div class="boardGameList">
                  <div class="bigTitle">
                    店內桌遊
                  </div>
                  <div class="content_area">
                    老闆精心挑選近300款桌遊
                    <br>
                    熱門爆款通通都有
                    <br>
                    不會玩不用擔心
                    <br>
                    老闆全都會教
                  </div>
                  <div class="btn_area">
                    <q-btn label="店內桌遊" to="/boardGameList" ouline size="lg" color="primary" class="text-white" />
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="shopping">
                  <div class="bigTitle">
                    二手專區
                  </div>
                  <div class="content_area">
                    疫情期間害怕出去人擠人
                    <br>
                    但是又好想玩桌遊嗎
                    <br>
                    現在就下單你喜歡的遊戲
                    <br>
                    安心在家享受桌遊時刻
                  </div>
                  <div class="btn_area">
                    <q-btn label="二手專區" to="/shoppingMall" ouline size="lg" color="primary" class="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-parallax>
      </div>

      <!-- 聯絡我們 -->
      <div id="section05" class="section">
        <div class="container">
          <!-- 3icon -->
          <div class="row">
            <div class="col-4">
              <div class="icon_area">
                <q-icon name="mdi-map-marker" color="primary" size="70px" />
              </div>
              <div class="info_area">
                地址
                <br>
                新北市泰山區貴子里致遠新村55之1號
              </div>
            </div>
            <div class="col-4">
              <div class="icon_area">
                <q-icon name="mdi-phone" color="primary" size="70px" />
              </div>
              <div class="info_area">
                連絡電話
                <br>
                02-23941157
              </div>
            </div>
            <div class="col-4">
              <div class="icon_area">
                <q-icon name="mdi-clock-time-four" color="primary" size="70px" />
              </div>
              <div class="info_area">
                營業時間
                <br>
                早上10:00至晚上23:00
              </div>
            </div>
          </div>
          <!-- iframemap -->
          <div class="row">
            <div class="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7035065347523!2d121.41732691537885!3d25.044134144038303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bec9ad74b1%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2sus!4v1677121138810!5m2!1szh-TW!2sus" width="1037" height="606" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </div>

      <!-- footer -->
      <div id="footer">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="info_area">
                地址 : 新北市泰山區貴子里致遠新村55之1號
                <br>
                電話 : 02-23941157
                <br>
                E-mail : admin@gmail.com
                <br>
                營業時間 : 早上10:00至晚上23:00 每週三公休
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="btn_area">
                <q-btn icon="mdi-facebook" outline rounded color="secondary" class="q-mr-lg" />
                <q-btn icon="mdi-instagram" outline rounded color="secondary" class="q-mr-lg" />
                <q-btn icon="mdi-twitter" outline rounded color="secondary" />
              </div>
            </div>
            <div class="col-12">
              <div class="copyright">
                Copyright © 2023 Yung Chien Yang. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script setup>
import newsModle from '../../components/newsModel.vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { api } from '@/boot/axios.js'
import { useQuasar } from 'quasar'

const $q = useQuasar()

// 處理大圖動畫
const bgArea = ref(null)
const block1 = ref(null)
const block2 = ref(null)
const block3 = ref(null)

// onMounted(() => {
//   console.log(bgArea.value.style.backgroundImage)
// })

gsap.registerPlugin(ScrollTrigger)

const newsAnimation = function () {
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: '#section02',
      start: '50% 100%',
      end: 'bottom 100%',
      toggleActions: 'play reverse play reverse',
      scrub: 4
      // markers: true
    },
    defaults: {
      duration: 1,
      ease: 'back'
    }
  })
  tl1
    .from('#section02 .bigTitle', {
      y: 100,
      opacity: 0
    })
    .from('#section02 .news_area', {
      x: 500,
      opacity: 0
    }, '-=0.1')
}

const aboutAnimation = function () {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#section03',
      start: '10% 100%',
      end: 'bottom 100%',
      toggleActions: 'play reverse play reverse',
      scrub: 4
      // markers: true
    },
    defaults: {
      duration: 1,
      ease: 'back'
    }
  })
  tl2
    .from('#section03 .bigTitle', {
      y: 100,
      opacity: 0,
      delay: 0.5
    })
    .from('#section03 .info_area1', {
      y: 100,
      opacity: 0
    }, '-=0.1')
    .from('#section03 .img_area1', {
      y: 100,
      opacity: 0
    }, '-=0.1')
    .from('#section03 .info_area2', {
      y: 100,
      opacity: 0
    }, '-=0.1')
    .from('#section03 .img_area2', {
      y: 100,
      opacity: 0
    }, '-=0.1')
}

const gamesAnimation = function () {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#section04',
      start: '10% 100%',
      end: 'bottom 100%',
      toggleActions: 'play reverse play reverse',
      scrub: 4
      // markers: true
    },
    defaults: {
      duration: 1,
      ease: 'back'
    }
  })
  tl2
    .from('.boardGameList', {
      y: 100,
      opacity: 0,
      delay: 1
    })
    .from('.shopping', {
      y: 100,
      opacity: 0
    }, '>1')
}

onMounted(() => {
  aboutAnimation()
  newsAnimation()
  gamesAnimation()
})

const triggers = ScrollTrigger.getAll()

onUnmounted(() => {
  triggers.forEach((trigger) => {
    // 把 ScrollTrigger 綁定的動畫消除
    trigger.kill()
  })
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
