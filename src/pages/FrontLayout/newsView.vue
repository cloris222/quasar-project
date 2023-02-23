<template>
  <div id="newsView">
    <div class="container">
      <div class="row section">
        <div class="col-12 bg-white">
          <q-breadcrumbs class="text-primary q-mb-lg" active-color="grey">
            <template #separator>
              <q-icon
                size="1.5em"
                name="chevron_right"
                color="primary"
              />
            </template>
            <q-breadcrumbs-el label="首頁" icon="home" to="/" />
            <q-breadcrumbs-el label="最新公告" icon="mdi-newspaper-variant-outline" />
          </q-breadcrumbs>
        </div>
        <div v-for="(item,i) in reversedItems" :key="i" class="col-12  q-my-lg">
          <NewsCard v-bind="item" />
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
import { reactive, computed } from 'vue'
import { api } from '@/boot/axios.js'
import { useQuasar } from 'quasar'
import NewsCard from '@/components/NewsCard.vue'

const $q = useQuasar()
const news = reactive([])

const reversedItems = computed(() => {
  return [...news].reverse()
})

console.log(reversedItems);

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
</script>
