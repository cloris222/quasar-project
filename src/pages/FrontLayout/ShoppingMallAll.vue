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

      <!-- 人數slider -->
      <div class="row justify-center q-mt-lg">
        <div class="col-4 col-lg-2 title_area">
          人數
        </div>
        <div class="col-8 col-lg-4 q-mb-lg">
          <q-slider
            v-model="age"
            snap
            label
            markers
            marker-labels
            :min="0"
            :max="6"
          />
        </div>
      </div>

      <!-- 標籤 -->
      <div class="row justify-center">
        <div class="col-2 title_area">
          標籤
        </div>
        <div class="col-4 q-mb-lg">
          <q-select
            v-model="tags"
            filled
            multiple
            :options="categories"
            label="新增標籤"
            style="width: 250px"
          />
        </div>
        <div class="col-6">
          <q-chip v-for="(chip,i) in chips" :key="i" v-model="chips" :props="tagsToChips" removable color="primary" text-color="white" @remove.prevent="removeChip(i)">
            {{ tag }}
          </q-chip>
        </div>
      </div>

      <!-- price slider -->
      <div class="row justify-center">
        <div class="col-12 col-lg-8 q-mb-lg">
          <q-slider
            v-model="price"
            snap
            markers
            lable
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
const tags = ref([])
const chips = ref([])

const removeChip = (idx) => {
  tags.value.splice(idx, 1)
  chips.value.splice(idx, 1)
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
