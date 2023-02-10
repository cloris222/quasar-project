<template>
  <div id="shoppingMall">
    <div class="container">
      <!-- 麵包屑和搜尋 -->
      <div class="row justify-evenly q-mt-lg">
        <div class="col-3">
          <q-breadcrumbs class="text-primary" active-color="grey">
            <template #separator>
              <q-icon
                size="1.5em"
                name="chevron_right"
                color="primary"
              />
            </template>
            <q-breadcrumbs-el label="首頁" icon="home" />
            <q-breadcrumbs-el label="二手專區" icon="mdi-bookshelf" />
          </q-breadcrumbs>
        </div>
        <div class="col-3" />
        <q-input v-model="filter" standard dense debounce="300" placeholder="Search">
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <!-- tag filter功能 -->
      <div class="row justify-center q-mt-lg">
        <div class="col-12 col-lg-7">
          <q-slider
            v-model="age"
            snap
            label-always
            :marker-labels="gamerMarkerLabel"
            :min="0"
            :max="10"
          />
        </div>
        <div class="col-12 col-lg-7">
          <q-chip v-for="(category,i) in categories" :key="i" color="primary" text-color="white">
            {{ category }}
          </q-chip>
        </div>
        <div class="col-12 col-lg-7">
          <q-slider
            v-model="price"
            snap
            markers
            :marker-labels="priceMarkerLabel"
            :min="0"
            :max="10"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-12" />
        <ProductCard v-for="(product,i) in products" :key="i" v-bind="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { api } from '../../boot/axios.js'
import { useQuasar } from 'quasar'
import ProductCard from '../../components/ProductCard.vue'

const $q = useQuasar()
const products = reactive([])
const age = ref(0)
const price = ref(0)
const gamerMarkerLabel = (value) => {
  return `${value}人`
}
const priceMarkerLabel = (value) => {
  return `$${100 * value}`
}
const categories = ['派對遊戲', '策略遊戲', '陣營遊戲', '親子遊戲', '紙牌遊戲', '其他遊戲', '暢銷遊戲', '最新上架', '撿便宜', '八成新', '近全新']
const filter = ref([]);

(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    $q.notify({
      position: 'top',
      message: error?.response?.data?.message || '發生錯誤',
      color: 'secondary'
    })
  }
})()
</script>
