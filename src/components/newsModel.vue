<template>
  <div id="newsModel">
    <swiper
      :slides-per-view="3"
      :space-between="15"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(item,i) in reversedItem" :key="i">
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
          <q-btn flat size="xl" to="/newsView">
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

import { computed } from 'vue'

const reversedItem = computed(() => {
  return [...props.news].reverse().slice(0, 5)
})

const props = defineProps({
  news: {
    type: Array,
    default: () => []
  }
})

</script>
