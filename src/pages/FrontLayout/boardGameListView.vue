<template>
  <div id="boardGameList">
    <div class="container">
      <!-- 麵包屑 -->
      <div class="row ">
        <div class="col-3">
          <q-breadcrumbs class="text-primary" active-color="grey">
            <template #separator>
              <q-icon
                size="1.5em"
                name="chevron_right"
                color="primary"
              />
            </template>
            <q-breadcrumbs-el label="首頁" icon="home" to="/" />
            <q-breadcrumbs-el label="桌遊清單" icon="mdi-bookshelf" />
          </q-breadcrumbs>
        </div>
      </div>

      <!-- filter功能 -->
      <div class="row filter_area">
        <div class="col-12 col-lg-5">
          <div class="gamer_filter">
            <div class="title_area">
              <q-icon name="diversity_3" size="sm" color="secondary" />
              <div class="text-white">
                人數
              </div>
            </div>
            <div class="input_area">
              <q-range
                v-model="filterCondition.gamer"
                :disable="gamerradio === 'more'"
                snap
                markers
                :marker-labels="gamerLabel"
                color="white"
                :min="1"
                :max="10"
              />
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-7">
          <div class="category_filter">
            <div class="title_area">
              <q-icon name="sell" size="sm" color="secondary" />
              <div class="text-white">
                標籤
              </div>
            </div>
            <div class="input_area q-mr-lg">
              <q-select
                v-model="filterCondition.category"
                filled
                multiple
                :options="categories"
                label="新增標籤"
                style="width: 250px"
                bottom-slots
                bg-color="white"
              />
            </div>
            <div class="chip_area">
              <q-chip v-for="(chip,i) in chips" :key="i" v-model="chips" color="secondary" text-color="white" clickable icon="mdi-close-circle" icon-color="white" @click="delChip(i)">
                {{ chip }}
              </q-chip>
            </div>
          </div>
        </div>
      </div>
      <!-- 遊戲人數 -->

      <div class="row q-mx-auto boardGameList_card_area">
        <div v-for="(game,i) in filterFunc" :key="i" class="col-6 col-lg-4 q-mb-lg">
          <boardGameListcard v-bind="game" />
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
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { api } from '../../boot/axios.js'
import { useQuasar } from 'quasar'
import _ from 'lodash'
import boardGameListcard from '../../components/boardGameListcard.vue'

const $q = useQuasar()
const boardGameList = reactive([])
const chips = ref(['熱門遊戲', '最新遊戲'])
const categories = ['派對遊戲', '策略遊戲', '陣營遊戲', '親子遊戲', '紙牌遊戲', '其他遊戲', '熱門遊戲', '最新遊戲', '新手友善']
const gamerradio = ref('less')

// 存資料的form
// const form = reactive({
//   p_id: '',
//   quantity: 0,
//   price: 0,
//   name: '',
//   loading: false
// })

onMounted(() => {
  watch(() => filterCondition.category, (newValue, oldValue) => {
    chips.value = []
    chips.value.push(...filterCondition.category.map((category) => {
      return category
    }))
  })
})

const gamerLabel = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10↑'
}

const delChip = (idx) => {
  // console.log(idx)
  // console.log(chips.value)
  chips.value.splice(idx, 1)
  filterCondition.category.splice(idx, 1)
}

// 篩選條件filter
const filterCondition = reactive({
  gamer: {
    min: 1,
    max: 5
  },
  category: ['熱門遊戲', '最新遊戲']
})

const filterFunc = computed(() => {
  return boardGameList.filter((game) => {
    if (filterCondition.gamer.max === 10) {
      return game.gamer.split('~').map(Number)[1] >= parseInt(filterCondition.gamer.max) &&
    parseInt(_.intersection(game.category, filterCondition.category).length) !== 0
    } else {
      return game.gamer.split('~').map(Number)[0] >= parseInt(filterCondition.gamer.min) &&
    game.gamer.split('~').map(Number)[1] <= parseInt(filterCondition.gamer.max) &&
    parseInt(_.intersection(game.category, filterCondition.category).length) !== 0
    }
  })
});

(async () => {
  try {
    const { data } = await api.get('/boardGameList')
    boardGameList.push(...data.result)
  } catch (error) {
    $q.notify({
      position: 'top',
      message: error?.response?.data?.message || '發生錯誤',
      color: 'negative'
    })
  }
})()
</script>
