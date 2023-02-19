<template>
  <div id="productView">
    <div class="container">
      <div class="row">
        <div class="col-10 q-px-lg">
          <!-- 圖片輪播 -->
          <q-carousel
            v-model="slide"
            swipeable
            animated
            thumbnails
            infinite
          >
            <q-carousel-slide v-for="(img,i) in product.images" :key="i" :name="i+1" :img-src="img" />
          </q-carousel>
        </div>
      </div>

      <!-- 桌遊資訊 -->
      <div class="row bg-secondary">
        <!-- tags -->
        <div class="col-10">
          <q-chip v-for="(chip,i) in product.category" :key="i" color="primary" class="text-white">
            {{ chip }}
          </q-chip>
        </div>
        <div class="col-10">
          <q-card flat boarded>
            <q-card-section>
              <!-- title -->
              <q-card-section>
                <div class="info_name">
                  {{ product.name }}
                </div>
              </q-card-section>
              <!-- rules -->
              <q-card-section>
                <div class="info_rules">
                  {{ product.rules }}
                </div>
              </q-card-section>
              <!-- price -->
              <q-card-section>
                <div class="info_price">
                  {{ product.price }}
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-10">
          <q-btn icon="mdi-cart-outline" flat class="icon_cart" @click="openDialog(product)" />
        </div>
      </div>

      <div class="row q-mx-auto justify-center">
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
</template>

<script setup>
import { api } from '@/boot/axios.js'
// useRouter 轉換頁面用 useRoute 取得頁面資訊
import { useRoute, useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { useUserStore } from 'src/stores/users'

const route = useRoute()
const router = useRouter()
const $q = useQuasar()
const user = useUserStore()

// carousel
const slide = ref(1)

// 購物車
const cartDialog = ref(false)

// 存資料的form
const form = reactive({
  p_id: '',
  quantity: 0,
  price: 0,
  name: ''
})

const openDialog = (product) => {
  cartDialog.value = true
  form.name = product.name
  form.p_id = product._id
  form.price = product.price
  form.quantity = 0
  console.log(cartDialog.value)
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
  await user.editCart({ _id: form.p_id, quantity: form.quantity, price: form.price, message: '加入購物車成功' })
  cartDialog.value = false
}

const product = reactive({
  _id: '',
  name: '',
  images: [],
  category: [],
  gamer: 0,
  age: 0,
  rules: '',
  price: 0,
  sell: true,
  loading: false
});

(async () => {
  try {
    console.log(route)
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.images = data.result.images
    product.category = data.result.category
    product.gamer = data.result.gamer
    product.age = data.result.age
    product.rules = data.result.rules
    product.price = data.result.price
    product.sell = data.result.sell

    document.title = '桌下吧 | ' + product.name
  } catch (error) {
    $q.notify({
      position: 'top',
      message: '取得商品失敗',
      color: 'negative',
      avatar: `https://source.boringavatars.com/beam/256/${user.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`
    })
    // 回上一頁
    router.go(-1)
  }
})()
</script>
