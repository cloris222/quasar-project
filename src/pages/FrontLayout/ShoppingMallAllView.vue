<template>
  <div id="shoppingMall">
    <div class="container">
      <!-- 麵包屑和搜尋 -->
      <div class="row q-mt-lg">
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
      </div>

      <!-- 人數slider -->
      <q-expansion-item
        v-model="expanded"
        icon="mdi-filter-variant"
        label="篩選條件"
      >
        <div class="toolSection">
          <div class="row justify-center q-mt-lg q-mx-auto">
            <div class="col-1 title_area">
              <q-icon name="diversity_3" size="sm" />
              人數
            </div>
            <div class="col-5 q-mb-lg">
              <q-radio v-model="gamerradio" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="less" label="10人以下" />
              <q-radio v-model="gamerradio" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="more" label="10人以上" />
              <q-range
                v-model="filterCondition.gamer"
                :disable="gamerradio === 'more'"
                snap
                markers
                marker-labels
                :min="1"
                :max="10"
              />
            </div>
          </div>

          <!-- 標籤 -->
          <div class="row justify-center q-mx-auto">
            <div class="col-1 title_area">
              <q-icon name="sell" size="sm" />
              標籤
            </div>
            <div class="col-2 q-mb-lg">
              <q-select
                v-model="filterCondition.category"
                filled
                multiple
                :options="categories"
                label="新增標籤"
                style="width: 250px"
                bottom-slots
              >
                <template #append>
                  <q-btn round dense flat icon="add" @click="tagToChip" />
                </template>
              </q-select>
            </div>
            <div class="col-3">
              <q-chip v-for="(chip,i) in chips" :key="i" v-model="chips" color="primary" text-color="white" clickable icon="mdi-close-circle" icon-color="white" @click="delChip(i)">
                {{ chip }}
              </q-chip>
            </div>
          </div>

          <!-- price slider -->
          <div class="row justify-center q-mx-auto">
            <div class="col-1 title_area">
              <q-icon name="monetization_on" size="sm" />
              價格
            </div>
            <div class="col-12 col-lg-5 q-mb-lg">
              <q-slider
                v-model="filterPrice"
                markers
                :marker-labels="priceMarkerLabel"
                :min="0"
                :max="10"
                snap
              />
            </div>
          </div>
        </div>
      </q-expansion-item>

      <div class="row q-mx-auto justify-center">
        <div v-for="(product,i) in filterFunc" :key="i" class="col-6 col-lg-3 q-mb-lg">
          <ProductCard v-bind="product" @open-cart-dialog="openDialog(product)" />
          <!-- 加入cart -->
          <q-dialog v-model="cartDialog" persistent>
            <q-card class="q-px-md">
              <q-card-section class="row items-center q-pb-md">
                <div class="text-h6">
                  購物車
                </div>
                <q-space />
                <q-btn v-close-popup icon="close" flat round dense />
              </q-card-section>

              <q-form
                class="q-gutter-md"
                :style="{width:'500px'}"
                @submit="onSubmit"
              >
                <q-card-section>
                  品名:{{ form.name }}
                </q-card-section>
                <q-card-section>
                  價錢:{{ form.price }}
                </q-card-section>
                <q-card-section>
                  <q-input
                    v-model="form.quantity"
                    outlined
                    type="number"
                    label="請選擇商品數量 *"
                    lazy-rules
                    :rules="[ rules.required,rules.number]"
                  />
                </q-card-section>
                <q-card-section>
                  <q-btn label="確認" type="submit" color="primary" :loading="form.loading" />
                </q-card-section>
              </q-form>
            </q-card>
          </q-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { api } from '../../boot/axios.js'
import { useQuasar } from 'quasar'
import { useUserStore } from '@/stores/users.js'
import _ from 'lodash'
import ProductCard from '../../components/ProductCard.vue'

const user = useUserStore()
const { editCart } = user
const $q = useQuasar()
const products = reactive([])
const chips = ref([])
const expanded = ref(true)
const cartDialog = ref(false)
const categories = ['派對遊戲', '策略遊戲', '陣營遊戲', '親子遊戲', '紙牌遊戲', '其他遊戲', '暢銷遊戲', '最新上架', '撿便宜', '八成新', '近全新']
const filterPrice = ref(1)
const gamerradio = ref('less')

// 存資料的form
const form = reactive({
  p_id: '',
  quantity: 0,
  price: 0,
  name: '',
  loading: false
})

const openDialog = (product) => {
  cartDialog.value = true
  form.name = product.name
  form.p_id = product._id
  form.price = product.price
  form.quantity = 0
  console.log(cartDialog.value)
}

const tagToChip = () => {
  chips.value = filterCondition.category.map((category) => {
    return category
  })
}

const delChip = (idx) => {
  // console.log(idx)
  // console.log(chips.value)
  chips.value.splice(idx, 1)
  filterCondition.category.splice(idx, 1)
}

const priceMarkerLabel = (value) => {
  return `$${100 * value}`
}

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  number (value) {
    return value > 0 || '數量錯誤'
  }
}

const onSubmit = async () => {
  form.loading = true
  await editCart({ _id: form.p_id, quantity: form.quantity, price: form.price, message: '加入購物車成功' })
  cartDialog.value = false
}

const filterPrice2 = computed(() => {
  return filterPrice.value * 100
})

// 篩選條件filter
const filterCondition = reactive({
  gamer: {
    min: 1,
    max: 5
  },
  category: ['暢銷遊戲'],
  price: filterPrice2
})

const filterFunc = computed(() => {
  return products.filter((product) => {
    if (gamerradio.value === 'less') {
      // 回傳10人以下桌遊
      // console.log(product.gamer.split('~').map(Number)[0], product.gamer.split('~').map(Number)[1])
      return product.gamer.split('~').map(Number)[0] >= parseInt(filterCondition.gamer.min) &&
    product.gamer.split('~').map(Number)[1] <= parseInt(filterCondition.gamer.max) &&
    parseInt(_.intersection(product.category, filterCondition.category).length) !== 0 &&
    product.price <= filterCondition.price
    } else {
      // 回傳10人以上桌遊
      return product.gamer.split('~').map(Number)[1] > 10 &&
    parseInt(_.intersection(product.category, filterCondition.category).length) !== 0 &&
    product.price <= filterCondition.price
    }
  })
});

(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    $q.notify({
      position: 'top',
      message: error?.response?.data?.message || '發生錯誤',
      color: 'negative'
    })
  }
})()
</script>
