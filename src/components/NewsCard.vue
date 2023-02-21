<template>
  <div id="NewsCard">
    <div class="container">
      <div class="row card_area">
        <div class="col-6 img_area">
          <img :src="images[0]">
        </div>
        <div class="col-6 info_area">
          <div class="news_title">
            {{ title }}
          </div>
          <div class="news_date">
            {{ new Date(date).toLocaleDateString() }}
          </div>
          <div class="news_description">
            {{ description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
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
</script>
