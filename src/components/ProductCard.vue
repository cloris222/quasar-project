<template>
  <div id="ProductCard">
    <q-card class="productCard">
      <div class="cardImage">
        <img :src="images[0]">
        <q-btn icon-right="mdi-arrow-right" label="了解詳情" color="secondary" class="detailBtn" :to="'/products/' + _id" />
      </div>
      <q-card-section>
        <div class="row text-h6">
          {{ name }}
          <div class="gamer">
            <div class="gamer_icon">
              <q-icon name="diversity_3" color="primary" size="sm" class="q-mr-sm " />
            </div>
            <div class="gamer_number">
              {{ gamer }}
            </div>
          </div>
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-chip v-for="(item,i) in category" :key="i" color="secondary" text-color="white">
          {{ item }}
        </q-chip>
      </q-card-section>
      <q-card-section class="q-pt-none price_area">
        ${{ price }}
      </q-card-section>
      <q-card-section class="q-pt-none btn_area flex justify-center no-wrap">
        <q-btn icon="mdi-cart-outline" flat class="icon_cart " @click="onBtnClick" />
        <!-- <q-btn icon="mdi-heart" flat class="icon_favorite" /> -->
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>

import { ref } from 'vue'

const cartDialog = ref(true)
const emit = defineEmits(['open-cart-dialog'])

const onBtnClick = () => {
  emit('open-cart-dialog', cartDialog.value)
}

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
  price: {
    type: Number,
    default: 0
  },
  sell: {
    type: Boolean,
    default: false
  }

})
</script>
