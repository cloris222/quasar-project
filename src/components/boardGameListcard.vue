<template>
  <div id="boardGameListCard">
    <q-card class="boardGameListCard">
      <div class="cardImage">
        <img :src="images[0]">
        <q-btn icon-right="mdi-arrow-right" label="了解詳情" color="secondary" class="detailBtn" :to="'/boardGameList/' + _id" />
      </div>
      <q-card-section>
        <div class="row text-h6">
          {{ name }}
          <q-icon name="diversity_3" color="primary" size="sm" class="q-mr-sm" />
          <span style="font-size:16px">{{ gamer }}</span>
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-chip v-for="(item,i) in category" :key="i" color="secondary" text-color="white">
          {{ item }}
        </q-chip>
      </q-card-section>
    </q-card>
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
  name: {
    type: String,
    default: ''
  },
  images: {
    type: Array,
    default () {
      return []
    }
  },
  category: {
    type: Array,
    default () {
      return []
    }
  },
  gamer: {
    type: String,
    default: ''
  },
  age: {
    type: Number,
    default: 0
  },
  rules: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  }

})
</script>
