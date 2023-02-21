<template>
  <div id="newsView">
    <div class="container">
      <div class="row">
        <div v-for="(item,i) in news" :key="i" in news>
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
import NewsCard from '@/components/newsCard.vue'

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
