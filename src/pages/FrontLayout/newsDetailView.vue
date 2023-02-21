<template>
  <div id="newsDetailView">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="img_area">
            <img :src="news.images[0]">
          </div>
        </div>
        <div class="col-12">
          <div class="title_area">
            {{ news.title }}
          </div>
          <div class="date_area">
            {{ news.date }}
          </div>
          <div class="description_area">
            {{ news.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { api } from '@/boot/axios.js'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useUserStore } from 'src/stores/users'

const route = useRoute()
const router = useRouter()
const $q = useQuasar()
const user = useUserStore()

const news = reactive({
  title: '',
  date: '',
  description: '',
  images: []
});

(async () => {
  try {
    const { data } = await api.get('/news/' + route.params.id)
    news.title = data.result.title
    news.date = data.result.date
    news.description = data.result.description
    news.images = data.result.images
  } catch (error) {
    console.log(error)
    $q.notify({
      position: 'top',
      message: '載入公告失敗',
      color: 'negative',
      avatar: `https://source.boringavatars.com/beam/256/${user.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`
    })
    // 回上一頁
    router.go(-1)
  }
})()
</script>
