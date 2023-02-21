<template>
  <div id="newsModel">
    <swiper
      :navigation="{
        nextEl: '.btn_next',
        prevEl: '.btn_prev',
      }"
      :modules="modules"
    >
      <swiper-slide v-for="(item,i) in news" :key="i">
        <div class="container">
          <div class="column card q-mx-auto">
            <div class="col-12 col-lg-6 left ">
              <div class="img_area">
                <img :src="item.images[0]">
              </div>
            </div>
            <div class="col-12 col-lg-6 right">
              <div class="text_area">
                <div class="text_title">
                  {{ item.title }}
                </div>
                <div class="text_date">
                  {{ item.date }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- <swiper-slide>
        <div class="container">
          <div class="column content-center card q-mx-auto">
            <div class="col-12 left ">
              <div class="img_area">
                <img :src="props[1].images[0]">
              </div>
            </div>
            <div class="col-12 right">
              <div class="text_area">
                <div class="text_title">
                  {{ props[1].title }}
                </div>
                <div class="text_date">
                  {{ props[1].date }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="container">
          <div class="column content-center card q-mx-auto">
            <div class="col-12 left ">
              <div class="img_area">
                <img :src="props[2].images[0]">
              </div>
            </div>
            <div class="col-12 right">
              <div class="text_area">
                <div class="text_title">
                  {{ props[2].title }}
                </div>
                <div class="text_date">
                  {{ props[2].date }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide> -->
    </swiper>

    <div class=" btn ">
      <div class="btn_area">
        <q-btn label="公告列表" color="primary" class="btn_list" />
        <q-btn square color="secondary" icon="chevron_left" class="btn_prev" />
        <q-btn square color="secondary" icon="chevron_right" class="btn_next" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'

defineProps({
  news: {
    type: Array,
    default: () => []
  }
})

const modules = reactive([Pagination, Navigation])
// const title = ref('這是一個桌遊店的最新公告')
// const date = ref('1999/02/24')

</script>
