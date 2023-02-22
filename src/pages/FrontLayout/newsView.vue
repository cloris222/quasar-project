<template>
  <div id="newsView">
    <div class="container">
      <div class="row section">
        <div class="col-12 bg-white">
          <q-breadcrumbs class="text-primary" active-color="grey">
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
        <div v-for="(item,i) in news" :key="i" in news class="col-12  q-my-lg">
          <NewsCard v-bind="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from '@/boot/axios.js'
import { useQuasar } from 'quasar'
import NewsCard from '@/components/NewsCard.vue'

const $q = useQuasar()
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
</script>
