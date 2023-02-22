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
      <!-- Q&A -->
      <div class="row">
        <div class="col-1">
          <div class="avatar_area">
            <q-avatar>
              <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
            </q-avatar>
          </div>
        </div>
        <div class="col-11">
          <div class="question_area">
            店內可以租桌遊嗎？
          </div>
        </div>

        <div class="col-11">
          <div class="answer_area">
            目前沒有提供出租。疫情期間建議買新遊戲回家比較安心喔。
          </div>
        </div>
        <div class="col-1">
          <div class="avatar_area">
            <q-avatar>
              <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
            </q-avatar>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-1">
          <div class="avatar_area">
            <q-avatar>
              <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
            </q-avatar>
          </div>
        </div>
        <div class="col-11">
          <div class="question_area">
            可以帶生日蛋糕去慶生嗎？
          </div>
        </div>

        <div class="col-11">
          <div class="answer_area">
            可以帶蛋糕喔，跟外食一樣垃圾幫忙帶走或酌收$200處理費。另外有冷藏冰箱可以借冰在冰箱。
          </div>
        </div>
        <div class="col-1">
          <div class="avatar_area">
            <q-avatar>
              <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
            </q-avatar>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-1">
          <div class="avatar_area">
            <q-avatar>
              <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
            </q-avatar>
          </div>
        </div>
        <div class="col-11">
          <div class="question_area">
            當天想玩但是沒辦法預約怎麼辦？
          </div>
        </div>

        <div class="col-11">
          <div class="answer_area">
            網路預約只提供隔天到60天內的預約，當天要來玩的話可以直接撥店內電話詢問位子喔。
          </div>
        </div>
        <div class="col-1">
          <div class="avatar_area">
            <q-avatar>
              <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
            </q-avatar>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-1">
          <div class="avatar_area">
            <q-avatar>
              <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
            </q-avatar>
          </div>
        </div>
        <div class="col-11">
          <div class="question_area">
            我要怎麼修改或取消我的預約？
          </div>
        </div>

        <div class="col-11">
          <div class="answer_area">
            如果臨時有事需要修改預約的話，請直接致電店裡進行修改喔。電話：02-23941157
          </div>
        </div>
        <div class="col-1">
          <div class="avatar_area">
            <q-avatar>
              <img :src="`https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`">
            </q-avatar>
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
