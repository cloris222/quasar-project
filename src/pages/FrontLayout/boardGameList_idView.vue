<template>
  <div id="boardGameList_idView">
    <div class="container">
      <div class="row q-mt-lg q-my-lg">
        <div class="col-12">
          <q-breadcrumbs class="text-primary" active-color="grey">
            <template #separator>
              <q-icon
                size="1.5em"
                name="chevron_right"
                color="primary"
              />
            </template>
            <q-breadcrumbs-el label="首頁" icon="home" to="/" />
            <q-breadcrumbs-el label="店內桌遊" icon="mdi-bookshelf" to="/boardGameList" />
            <q-breadcrumbs-el :label="product.name" icon="mdi-cards" />
          </q-breadcrumbs>
        </div>
      </div>
      <div class="gameInfo">
        <div class="row img_area bg-primary">
          <div class="col-8 q-mx-auto q-pt-lg">
            <!-- 輪播圖 -->
            <div class="slideshow">
              <div v-for="(slide, index) in product.images" :key="index" class="slide" :class="{ active: currentSlide === index }">
                <img :src="slide">
              </div>
            </div>
            <div class="thumbnails">
              <img v-for="(thumbnail, index) in product.images" :key="index" :src="thumbnail" :class="{ active: currentSlide === index }" @click="handleThumbnailClick(index)">
            </div>
          </div>
        </div>

        <!-- 桌遊資訊 -->
        <div class="row info_area">
          <q-card>
            <!-- tags -->
            <q-card-section>
              <div class="q-pt-lg">
                <q-chip v-for="(chip,i) in product.category" :key="i" color="primary" class="text-white ">
                  {{ chip }}
                </q-chip>
              </div>
            </q-card-section>
            <!-- info content -->
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
            </q-card-section>
          </q-card>
          <div class="col-10">
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
  </div>
  <!-- footer -->
  <div id="footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="info_area">
            地址 : 新北市泰山區貴子里致遠新村55之1號
            <br>
            電話 : 02-23941157
            <br>
            E-mail : admin@gmail.com
            <br>
            營業時間 : 早上10:00至晚上23:00 每週三公休
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="btn_area">
            <q-btn icon="mdi-facebook" outline rounded color="secondary" class="q-mr-lg" />
            <q-btn icon="mdi-instagram" outline rounded color="secondary" class="q-mr-lg" />
            <q-btn icon="mdi-twitter" outline rounded color="secondary" />
          </div>
        </div>
        <div class="col-12">
          <div class="copyright">
            Copyright © 2023 Yung Chien Yang. All rights reserved.
          </div>
        </div>
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
const currentSlide = ref(0)
const handleThumbnailClick = (index) => {
  currentSlide.value = index
}

const product = reactive({
  name: '',
  images: [],
  category: [],
  gamer: 0,
  age: 0,
  rules: '',
  sell: true,
  loading: false
});

(async () => {
  try {
    console.log(route)
    const { data } = await api.get('/boardGameList/' + route.params.id)
    product.name = data.result.name
    product.images = data.result.images
    product.category = data.result.category
    product.gamer = data.result.gamer
    product.age = data.result.age
    product.rules = data.result.rules
    product.sell = data.result.sell
    document.title = '桌下吧 | ' + product.name
  } catch (error) {
    $q.notify({
      position: 'top',
      message: '取得內容失敗',
      color: 'negative',
      avatar: `https://source.boringavatars.com/beam/256/${user.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`
    })
    // 回上一頁
    router.go(-1)
  }
})()
</script>
