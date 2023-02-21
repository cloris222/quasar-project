<template>
  <div id="newsModel">
    <swiper
      :slides-per-view="3"
      :space-between="15"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(item,i) in news.slice(0,5)" :key="i">
        <q-card>
          <!-- img -->
          <div class="img_area">
            <img :src="item.images[0]">
          </div>
          <q-card-section>
            <!-- title -->
            <div class="title_area">
              {{ item.title }}
            </div>
            <!-- date -->
            <div class="date_area">
              {{ new Date(item.date).toLocaleDateString() }}
            </div>
            <!-- <div class="btn_area">
              <q-btn round color="secondary" icon="more_horiz" size="sm" :to="'/news/' + item._id" />
            </div> -->
          </q-card-section>
        </q-card>
      </swiper-slide>
      <swiper-slide>
        <div class="btn_area">
          <q-btn flat size="xl">
            <q-icon name="mdi-arrow-right-bold-circle" color="secondary" />
            MORE
          </q-btn>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

defineProps({
  news: {
    type: Array,
    default: () => []
  }
})

</script>
