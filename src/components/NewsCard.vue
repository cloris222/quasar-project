<template>
  <div id="NewsCard">
    <div class="container">
      <div class="row body">
        <div class="date_area">
          {{ formattedDate[0] }}
          {{ formattedDate[1] }}
          {{ formattedDate[2] }}
        </div>
        <div class="img_area">
          <img :src="images[0]">
        </div>
        <div class="info_area">
          <div class="info_title">
            {{ title }}
          </div>
          <div class="info_description">
            {{ description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { computed } from 'vue'

const props = defineProps({
  /* eslint-disable */
  _id: {
    type: String,
    default: ''
  },
  /* eslint-enable */
  date: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  images: {
    type: Array,
    default () {
      return []
    }
  },
  description: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  }
})

const formattedDate = computed(() => {
  return new Date(props.date).toLocaleDateString().split('/')
})
</script>
