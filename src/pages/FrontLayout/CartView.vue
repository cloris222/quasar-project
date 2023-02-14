<template>
  <div id="CartView">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>購物車</h1>
        </div>
      </div>
      <div class="row">
        <div v-for="(product,i) in cart" :key="i" class="col-12">
          <q-card>
            <q-card-section horizontal>
              <!-- 圖片 -->
              <q-card-section>
                <div>
                  <img :src="product.p_id.images[0]" class="cart_img">
                </div>
              </q-card-section>
              <!-- 品名 -->
              <q-card-section>
                {{ product.p_id.name }}
              </q-card-section>
              <!-- 價格 -->
              <q-card-section>
                {{ product.p_id.price }}
              </q-card-section>
              <!-- 數量 -->
              <q-card-section>
                {{ product.quantity }}
                <q-btn lable="-1" color="secondary" @click="updateCart(product.p_id._id,product.quantity-1)" />
                <q-btn lable="+1" color="secondary" @click="updateCart(product.p_id._id,product.quantity+1)" />
              </q-card-section>
              <!-- 小計 -->
              <q-card-section>
                {{ product.quantity * product.p_id.price }}
              </q-card-section>
              <!-- 操作 -->
              <q-card-section>
                <q-btn icon="delete" @click="updateCart(product.p_id._id,product.quantity*-1)" />
              </q-card-section>
            </q-card-section>
            <!-- 總額 -->
            <q-card-section>
              {{ totalPrice }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { apiAuth } from '@/boot/axios.js'
import { useUserStore } from '@/stores/users.js'

const user = useUserStore()
const { editCart } = user
const cart = reactive([])
const totalPrice = ref(0)
const $q = useQuasar()

const updateCart = async (_id, quantity) => {
  await editCart({ _id, quantity })
}

(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
  } catch (error) {
    $q.notify({
      position: 'top',
      message: error?.response?.data?.message || '取得購物車失敗',
      color: 'negative'
    })
  }
})()
</script>
