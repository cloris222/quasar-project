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
      <q-parallax :height="1800" :speed="0.5">
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
              <div class="col-12">
                <div class="question">
                  <div class="question_avatar">
                    <q-avatar>
                      <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
                    </q-avatar>
                  </div>
                  <div class="question_text">
                    店內可以租桌遊嗎？
                  </div>
                </div>
              </div>
              <!-- answer -->
              <div class="col-12">
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
              <div class="col-12">
                <div class="question">
                  <div class="question_avatar">
                    <q-avatar>
                      <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
                    </q-avatar>
                  </div>
                  <div class="question_text">
                    可以帶生日蛋糕去慶生嗎？
                  </div>
                </div>
              </div>
              <!-- answer -->
              <div class="col-12">
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
              <div class="col-12">
                <div class="question">
                  <div class="question_avatar">
                    <q-avatar>
                      <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
                    </q-avatar>
                  </div>
                  <div class="question_text">
                    當天想玩但是沒辦法預約怎麼辦？
                  </div>
                </div>
              </div>
              <!-- answer -->
              <div class="col-12">
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
              <div class="col-12">
                <div class="question">
                  <div class="question_avatar">
                    <q-avatar>
                      <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
                    </q-avatar>
                  </div>
                  <div class="question_text">
                    可以純去店內喝飲料或精釀啤酒跟朋友聊天嗎？
                  </div>
                </div>
              </div>
              <!-- answer -->
              <div class="col-12">
                <div class="answer">
                  <div class="answer_text">
                    不論是要開會、打SWITCH或是喝酒聊天都很適合喔。
                    <br>
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
              <div class="col-12">
                <div class="question">
                  <div class="question_avatar">
                    <q-avatar>
                      <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
                    </q-avatar>
                  </div>
                  <div class="question_text">
                    我該如何修改或取消我的預約？
                  </div>
                </div>
              </div>
              <!-- answer -->
              <div class="col-12">
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
      <div class="row phone_footer">
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
      </div>
    </div>

    <!-- footer -->
    <div class="footer bg-primary">
      <div class="row">
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
import { useUserStore } from 'src/stores/users'

const user = useUserStore()
const { account } = user
</script>
