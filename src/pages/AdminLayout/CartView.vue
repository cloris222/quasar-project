<template>
  <div id="cartView">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>購物車</h1>
        </div>
      </div>
      <div class="row">
        <div v-for="(product,i)in cart" :key="i" class="col-12">
          <q-card>
            <q-card-section horizontal>
              <!-- 圖片 -->
              <q-card-section>
                <img :src="product.images[0]">
              </q-card-section>
              <!-- 品名 -->
              <q-card-section>
                {{ product.name }}
              </q-card-section>
              <!-- 價錢 -->
              <q-card-section>
                {{ product.price }}
              </q-card-section>
              <!-- 數量 -->
              <q-card-section>
                <q-input
                  v-model="product.quantity"
                  outlined
                  type="number"
                />
              </q-card-section>
              <!-- 小計 -->
              <q-card-section>
                {{ product.price * product.quantity }}
              </q-card-section>
            </q-card-section>
            <!-- 總金額 -->
            <q-card-section>
              {{ totalPrice }}
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="row justify-between">
        <div class="col-3">
          <q-btn>再去逛逛</q-btn>
        </div>
        <div class="col-3">
          總額共$元
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useQuasar } from 'quasar'
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = useUserStore()
const $q = useQuasar()
const { editCart, checkout } = user

const cart = reactive([])

const updateCart = async (idx, quantity) => {
  await editCart({ _id: cart[idx].p_id._id, quantity })
  cart[idx].quantity += quantity
  if (cart[idx].quantity <= 0) {
    cart.splice(idx, 1)
  }
}

const onCheckoutBtnClick = async () => {
  await checkout()
  router.push('/orders')
}

const totalPrice = computed(() => {
  return cart.reduce((total, current) => {
    return total + (current.p_id.price * current.quantity)
  }, 0)
})

const canCheckout = computed(() => {
  return cart.length > 0 && !cart.some(product => {
    return !product.p_id.sell
  })
});

(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
  } catch (error) {
    $q.notify({
      position: 'top',
      message: '無法取得購物車',
      color: 'negative',
      avatar: `https://source.boringavatars.com/beam/256/${user.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`
    })
  }
})()
</script>
