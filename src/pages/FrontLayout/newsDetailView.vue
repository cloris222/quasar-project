<template>
  <div id="newsDetailView">
    <div class="container">
      <div class="row newsBody">
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
            <q-breadcrumbs-el label="最新公告" icon="mdi-newspaper-variant-outline" to="/newsView" />
            <q-breadcrumbs-el :label="news.title" icon="mdi-newspaper" />
          </q-breadcrumbs>
        </div>
        <div class="col-12 q-my-lg bg-primary">
          <div class="date_area">
            <!-- 月份 -->
            <div class="date_month">
              {{ parseInt(formattedDate[1])>9?formattedDate[1]:'0'+formattedDate[1] }}.
            </div>
            <!-- 日期 -->
            <div class="date_day">
              {{ parseInt(formattedDate[2])>9?formattedDate[2]:'0'+formattedDate[2] }}.
            </div>
            <div class="date_year">
              {{ formattedDate[0] }}
            </div>
          </div>
          <div class="img_area">
            <img :src="news.images[0]">
          </div>
          <div class="info_area">
            <div class="info_title">
              {{ news.title }}
            </div>
            <div class="info_description">
              {{ news.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { api } from '@/boot/axios.js'
import { reactive, computed } from 'vue'
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
})

const formattedDate = computed(() => {
  return new Date(news.date).toLocaleDateString().split('/')
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
