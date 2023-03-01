<template>
  <div id="CartView">
    <div class="container q-mx-auto">
      <!-- 標題 -->
      <div class="row q-mx-auto">
        <div class="col-12">
          <h4>購物車</h4>
        </div>
      </div>
      <!-- 購物車表格 -->
      <div class="row q-mx-auto ">
        <div class="col-12">
          <q-table
            :rows="cart"
            :columns="columns"
            row-key="name"
            class="q-mt-lg"
          >
            <!-- 商品編號 -->
            <template #body-cell-shopping_id="props">
              <q-td :props="props">
                <div class="cart_shopping_id">
                  {{ props.row.p_id._id }}
                </div>
              </q-td>
            </template>

            <!-- 圖片 -->
            <template #body-cell-images="props">
              <q-td :props="props">
                <div class="cart_img">
                  <img :props="props" :src="props.row.p_id.images[0]">
                </div>
              </q-td>
            </template>

            <!-- 品名 -->
            <template #body-cell-name="props">
              <q-td :props="props" class="text-center">
                <div>
                  {{ props.row.p_id.name }}
                </div>
              </q-td>
            </template>

            <!-- 價錢 -->
            <template #body-cell-price="props">
              <q-td :props="props" class="text-center ">
                <div class="cart_price">
                  {{ props.row.price }}
                </div>
              </q-td>
            </template>

            <!-- 數量 -->
            <template #body-cell-quantity="props">
              <q-td :props="props">
                <div class="cart_quantity">
                  <q-btn round size="sm" icon="remove" color="secondary" @click="updateCart(props.row._id,props.row.quantity-1,props.row.price,'修改成功')" />
                  {{ props.row.quantity }}
                  <q-btn round size="sm" icon="add" color="secondary" @click="updateCart(props.row._id,props.row.quantity+1,props.row.price,'修改成功')" />
                </div>
              </q-td>
            </template>

            <!-- 小計 -->
            <template #body-cell-subtotal="props">
              <q-td :props="props">
                <div class="cart_subtotal">
                  {{ props.row.quantity * props.row.price }}
                </div>
              </q-td>
            </template>

            <!-- 操作 -->
            <template #body-cell-others="props">
              <q-td :props="props">
                <div class="productsOthers">
                  <q-btn square color="negative" icon="delete" :props="props" @click="updateCart(props.row._id,props.row.quantity*-1,props.row.price,'已將商品移除')" />
                </div>
              </q-td>
            </template>
          </q-table>
        </div>
      </div>
      <!-- totalprice -->
      <div class="row q-mx-auto q-mt-lg ">
        <div class="col-12 text-right" style="font-size: 2em">
          總金額:{{ totalPrice }}
        </div>
      </div>
      <!-- btn_area -->
      <div class="row q-mx-auto q-mt-lg justify-between">
        <div class="col-6 ">
          <q-btn square color="primary" outline icon="mdi-arrow-left" to="/shoppingMall" label="再去逛逛" />
        </div>
        <div class="col-6 text-right">
          <q-btn square color="primary" icon="mdi-arrow-right" label="去結帳" :disabled="!canCheckout" @click="onCheckoutBtnClick" />
        </div>
      </div>
      <!-- 結帳頁面 -->
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useQuasar } from 'quasar'
import { apiAuth } from '@/boot/axios.js'
import { useUserStore } from '@/stores/users.js'
import { useRouter } from 'vue-router'

const columns = [

  {
    name: 'shopping_id',
    required: true,
    label: '商品編號',
    align: 'left',
    field: row => row.name,
    sortable: true
  }, {
    name: 'images',
    required: true,
    label: '商品圖片',
    align: 'center',
    field: row => row.name,
    sortable: true
  },
  { name: 'name', align: 'center', label: '品名', field: row => row.images },
  { name: 'price', align: 'center', label: '價錢', field: row => row.category, sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'quantity', align: 'center', label: '數量', field: row => row.gamer, sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'subtotal', align: 'center', label: '小計', field: row => row.age, sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'others', align: 'center', label: '操作', field: row => row.others }
]

const user = useUserStore()
const { editCart, checkout } = user
const cart = reactive([])
const $q = useQuasar()
const router = useRouter()

// 總金額
const totalPrice = computed(() => {
  return cart.reduce((total, current) => {
    return total + current.price * current.quantity
  }, 0)
})

const canCheckout = computed(() => {
  return cart.length > 0 && !cart.some(product => {
    return !product.p_id.sell
  })
})

const onCheckoutBtnClick = async () => {
  await checkout()
  router.push('/user/shoppings')
}

const updateCart = async (_id, quantity, price, message) => {
  const idx = cart.findIndex((cart) => { return cart._id === _id })
  await editCart({ _id: cart[idx].p_id._id, quantity, price, message })
  cart[idx].quantity = quantity
  if (cart[idx].quantity <= 0) {
    cart.splice(idx, 1)
  }
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
