<template>
  <div id="QAView">
    <div class="container">
      <!-- 麵包屑 -->
      <div class="row">
        <div class="col-12">
          <q-breadcrumbs class="text-primary q-mb-lg" active-color="grey">
            <template #separator>
              <q-icon
                size="1.5em"
                name="chevron_right"
                color="primary"
              />
            </template>
            <q-breadcrumbs-el label="首頁" icon="home" to="/" />
            <q-breadcrumbs-el label="常見Q&A" icon="help_center" />
          </q-breadcrumbs>
        </div>
      </div>

      <div class="row phone q-mt-lg">
        <div class="col-12 phone_head bg-primary text-white">
          <div class="left">
            <q-icon name="mdi-chevron-left" />
            99+
            桌下吧
          </div>
          <div class="right">
            <q-icon name="mdi-magnify" size="md" class="q-mr-sm" />
            <q-icon name="mdi-phone" size="md" class="q-mr-sm" />
            <q-icon name="mdi-menu" size="md" />
          </div>
        </div>
      </div>

      <!-- Q&A -->
      <q-parallax :height="1950" :speed="0.5">
        <template #media>
          <img src="@/assets/qa/qabg7.jpg" class="parallaxImg">
        </template>

        <template #content="scope">
          <div
            class="absolute column items-center"
            :style="{
              opacity: 0.8 + (1 - scope.percentScrolled) * 0.55,
              top: (scope.percentScrolled * 30) + '%',
              left: 0,
              right: 0
            }"
          >
            <div class="row">
              <!-- question -->
              <div class="col-12 q1">
                <div class="question">
                  <div class="question_avatar">
                    <q-avatar>
                      <img src="https://source.boringavatars.com/beam/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51">
                    </q-avatar>
                  </div>
                  <div class="question_text">
                    店內可以租桌遊嗎？
                  </div>
                </div>
              </div>
              <!-- answer -->
              <div class="col-12 a1">
                <div class="answer">
                  <div class="answer_text">
                    目前沒有提供出租。
                    <br>
                    疫情期間建議買新遊戲回家比較安心喔。
                  </div>
                  <div class="answer_avatar">
                    <q-avatar>
                      <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
                    </q-avatar>
                  </div>
                </div>
              </div>

              <!-- question -->
              <div class="col-12 q2">
                <div class="question">
                  <div class="question_avatar">
                    <q-avatar>
                      <img src="https://source.boringavatars.com/beam/120/Amanda%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51">
                    </q-avatar>
                  </div>
                  <div class="question_text">
                    可以帶生日蛋糕去慶生嗎？
                  </div>
                </div>
              </div>
              <!-- answer -->
              <div class="col-12 a2">
                <div class="answer">
                  <div class="answer_text">
                    可以帶蛋糕喔，跟外食一樣垃圾幫忙帶走或酌收$200處理費。
                    有冷藏冰箱可以借冰在冰箱。
                  </div>
                  <div class="answer_avatar">
                    <q-avatar>
                      <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
                    </q-avatar>
                  </div>
                </div>
              </div>

              <!-- question -->
              <div class="col-12 q3">
                <div class="question">
                  <div class="question_avatar">
                    <q-avatar>
                      <img src="https://source.boringavatars.com/beam/120/abc%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51">
                    </q-avatar>
                  </div>
                  <div class="question_text">
                    當天想玩但是沒辦法預約怎麼辦？
                  </div>
                </div>
              </div>
              <!-- answer -->
              <div class="col-12 a3">
                <div class="answer">
                  <div class="answer_text">
                    網路預約只提供隔天到60天內的預約，
                    當天要來玩的話可以直接撥店內電話詢問位子喔。
                  </div>
                  <div class="answer_avatar">
                    <q-avatar>
                      <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
                    </q-avatar>
                  </div>
                </div>
              </div>

              <!-- question -->
              <div class="col-12 q4">
                <div class="question">
                  <div class="question_avatar">
                    <q-avatar>
                      <img src="https://source.boringavatars.com/beam/120/edf%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51">
                    </q-avatar>
                  </div>
                  <div class="question_text">
                    可以純去店內喝飲料或精釀啤酒跟朋友聊天嗎？
                  </div>
                </div>
              </div>
              <!-- answer -->
              <div class="col-12 a4">
                <div class="answer">
                  <div class="answer_text">
                    不論是要開會、打SWITCH或是喝酒聊天都很適合喔。
                    桌下吧隨時歡迎您的到來！
                  </div>
                  <div class="answer_avatar">
                    <q-avatar>
                      <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
                    </q-avatar>
                  </div>
                </div>
              </div>

              <!-- question -->
              <div class="col-12 q5">
                <div class="question">
                  <div class="question_avatar">
                    <q-avatar>
                      <img src="https://source.boringavatars.com/beam/120/happy%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51">
                    </q-avatar>
                  </div>
                  <div class="question_text">
                    我該如何修改或取消我的預約？
                  </div>
                </div>
              </div>
              <!-- answer -->
              <div class="col-12 a5">
                <div class="answer">
                  <div class="answer_text">
                    如果有修改或取消預約的需求，請直接撥電話至店裡諮詢喔。
                    電話：02-23941157
                  </div>
                  <div class="answer_avatar">
                    <q-avatar>
                      <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
                    </q-avatar>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </q-parallax>

      <!-- phone_footer -->
      <!-- <div class="row phone_footer">
        <div class="col-12  bg-primary text-white">
          <div class="left">
            <q-icon name="mdi-plus" size="md" class="q-mr-sm" />
            <q-icon name="mdi-camera" size="md" class="q-mr-sm" />
            <q-icon name="mdi-image-area" size="md" />
          </div>
          <div class="right">
            <q-icon name="mdi-microphone" class="q-ml-auto" size="md" />
          </div>
        </div>
      </div> -->
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
</template>

<script setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted } from 'vue'
import { useUserStore } from 'src/stores/users'

const user = useUserStore()
const { account } = user

gsap.registerPlugin(ScrollTrigger)

const QAAnimation = function () {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#QAView',
      start: 'top 0%',
      end: 'bottom 100%',
      toggleActions: 'play reverse play reverse',
      scrub: 3
      // markers: true
    },
    defaults: {
      duration: 1,
      ease: 'back'
    }
  })
  tl2
    .from('.q1', {
      y: 100,
      opacity: 0
    })
    .from('.a1', {
      y: 100,
      opacity: 0
    }, '>0.5')
    .from('.q2', {
      y: 100,
      opacity: 0
    }, '>2')
    .from('.a2', {
      y: 100,
      opacity: 0
    }, '>0.5')
    .from('.q3', {
      y: 100,
      opacity: 0
    }, '>2')
    .from('.a3', {
      y: 100,
      opacity: 0
    }, '>0.5')
    .from('.q4', {
      y: 100,
      opacity: 0
    }, '>2')
    .from('.a4', {
      y: 100,
      opacity: 0
    }, '>0.5')
    .from('.q5', {
      y: 100,
      opacity: 0
    }, '>2')
    .from('.a5', {
      y: 100,
      opacity: 0
    }, '>0.5')
}

onMounted(() => {
  QAAnimation()
})

const triggers = ScrollTrigger.getAll()

onUnmounted(() => {
  triggers.forEach((trigger) => {
    // 把 ScrollTrigger 綁定的動畫消除
    trigger.kill()
  })
})
</script>
