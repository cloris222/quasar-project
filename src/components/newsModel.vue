<template>
  <div id="newsModel">
    <swiper
      :pagination="{
        dynamicBullets: true,
      }"
      :modules="modules"
    >
      <swiper-slide>
        <div class="container">
          <div class="column card q-mx-auto">
            <div class="col-12 left ">
              <div class="img_area">
                <img src="https://picsum.photos/600/400/?random=10">
              </div>
            </div>
            <div class="col-12 right">
              <div class="text_area">
                <div class="text_title">
                  {{ title }}
                </div>
                <div class="text_date">
                  {{ date }}
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
                <img src="https://picsum.photos/600/400/?random=10">
              </div>
            </div>
            <div class="col-12 right">
              <div class="text_area">
                <div class="text_title">
                  {{ title }}
                </div>
                <div class="text_date">
                  {{ date }}
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
                <img src="https://picsum.photos/600/400/?random=10">
              </div>
            </div>
            <div class="col-12 right">
              <div class="text_area">
                <div class="text_title">
                  {{ title }}
                </div>
                <div class="text_date">
                  {{ date }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class=" btn ">
      <div class="btn_area">
        <q-btn label="公告列表" color="primary" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

const modules = reactive([Pagination])
const title = ref('這是一個桌遊店的最新公告')
const date = ref('1999/02/24')
</script>
