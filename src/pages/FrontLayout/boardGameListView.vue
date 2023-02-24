<template>
  <div id="boardGameList">
    <div class="container">
      <!-- 麵包屑 -->
      <div class="row q-mt-lg">
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

      <!-- 人數slider -->
      <q-expansion-item
        v-model="expanded"
        icon="mdi-filter-variant"
        label="篩選條件"
      >
        <div class="toolSection">
          <div class="row justify-center q-mt-lg q-mx-auto">
            <div class="col-1 title_area">
              <q-icon name="diversity_3" size="sm" />
              人數
            </div>
            <div class="col-5 q-mb-lg">
              <q-radio v-model="gamerradio" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="less" label="10人以下" />
              <q-radio v-model="gamerradio" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="more" label="10人以上" />
              <q-range
                v-model="filterCondition.gamer"
                :disable="gamerradio === 'more'"
                snap
                markers
                marker-labels
                :min="1"
                :max="10"
              />
            </div>
          </div>

          <!-- 標籤 -->
          <div class="row justify-center q-mx-auto">
            <div class="col-1 title_area">
              <q-icon name="sell" size="sm" />
              標籤
            </div>
            <div class="col-2 q-mb-lg">
              <q-select
                v-model="filterCondition.category"
                filled
                multiple
                :options="categories"
                label="新增標籤"
                style="width: 250px"
                bottom-slots
              >
                <template #append>
                  <q-btn round dense flat icon="add" @click="tagToChip" />
                </template>
              </q-select>
            </div>
            <div class="col-3">
              <q-chip v-for="(chip,i) in chips" :key="i" v-model="chips" color="primary" text-color="white" clickable icon="mdi-close-circle" icon-color="white" @click="delChip(i)">
                {{ chip }}
              </q-chip>
            </div>
          </div>
        </div>
      </q-expansion-item>

      <div class="row q-mx-auto justify-center">
        <div v-for="(game,i) in filterFunc" :key="i" class="col-6 col-lg-3 q-mb-lg">
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
import { ref, reactive, computed } from 'vue'
import { api } from '../../boot/axios.js'
import { useQuasar } from 'quasar'
import _ from 'lodash'
import boardGameListcard from '../../components/boardGameListcard.vue'

const $q = useQuasar()
const boardGameList = reactive([])
const chips = ref([])
const expanded = ref(true)
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

const tagToChip = () => {
  chips.value = filterCondition.category.map((category) => {
    return category
  })
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
  category: ['暢銷遊戲']
})

const filterFunc = computed(() => {
  return boardGameList.filter((game) => {
    // console.log(game.gamer.split('~').map(Number)[0], game.gamer.split('~').map(Number)[1])
    return game.gamer.split('~').map(Number)[0] >= parseInt(filterCondition.gamer.min) &&
    game.gamer.split('~').map(Number)[1] <= parseInt(filterCondition.gamer.max) &&
    parseInt(_.intersection(game.category, filterCondition.category).length) !== 0
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
