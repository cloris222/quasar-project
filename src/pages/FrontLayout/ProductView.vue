<template>
  <div class="container">
    <!-- 圖片輪播 -->
    <div class="row">
      <div class="col-12">
        <swiper
          :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }"
          :loop="true"
          :space-between="10"
          :navigation="true"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="swiperaModules"
          class="mySwiper2"
        >
          <swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            >
          </swiper-slide><swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            >
          </swiper-slide><swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
            >
          </swiper-slide><swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
            >
          </swiper-slide><swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
            >
          </swiper-slide><swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-6.jpg"
            >
          </swiper-slide><swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-7.jpg"
            >
          </swiper-slide><swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-8.jpg"
            >
          </swiper-slide><swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-9.jpg"
            >
          </swiper-slide><swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg">
          </swiper-slide>
        </swiper>
        <swiper
          :loop="true"
          :space-between="10"
          :slides-per-view="4"
          :free-mode="true"
          :watch-slides-progress="true"
          :modules="modules"
          class="mySwiper"
          @swiper="setThumbsSwiper"
        >
          <swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            >
          </swiper-slide><swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            >
          </swiper-slide><swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
            >
          </swiper-slide><swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
            >
          </swiper-slide><swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
            >
          </swiper-slide><swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-6.jpg"
            >
          </swiper-slide><swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-7.jpg"
            >
          </swiper-slide><swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-8.jpg"
            >
          </swiper-slide><swiper-slide>
            <img
              src="https://swiperjs.com/demos/images/nature-9.jpg"
            >
          </swiper-slide><swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg">
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- 桌遊資訊 -->
    <div class="row" />
  </div>
</template>

<script setup>
import { api } from '@/boot/axios.js'
// useRouter 轉換頁面用 useRoute 取得頁面資訊
import { useRoute, useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { useUserStore } from 'src/stores/users'

// swiper
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper'

const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}

const swiperaModules = [FreeMode, Navigation, Thumbs]

const route = useRoute()
const router = useRouter()
const $q = useQuasar()
const user = useUserStore()

const product = reactive({
  _id: '',
  name: '',
  images: [],
  category: [],
  gamer: 0,
  age: 0,
  rules: '',
  price: 0,
  sell: true
});

(async () => {
  try {
    console.log(route)
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.images = data.result.images
    product.category = data.result.category
    product.gamer = data.result.gamer
    product.age = data.result.age
    product.rules = data.result.rules
    product.price = data.result.price
    product.sell = data.result.sell

    document.title = '桌下吧 | ' + product.name
  } catch (error) {
    $q.notify({
      position: 'top',
      message: '取得商品失敗',
      color: 'negative',
      avatar: `https://source.boringavatars.com/beam/256/${user.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`
    })
    // 回上一頁
    router.go(-1)
  }
})()
</script>
