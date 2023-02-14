<template>
  <div id="CartView">
    <div class="container q-mx-auto">
      <div class="row q-mx-auto">
        <div class="col-12">
          <h4>購物車</h4>
        </div>
      </div>
      <!-- 購物車表格 -->
      <div class="row q-mx-auto ">
        <q-table
          title="購物車"
          :rows="cart"
          :columns="columns"
          row-key="name"
          class="q-mt-lg"
        >
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
              <p class="cart_price">
                {{ props.row.price }}
              </p>
            </q-td>
          </template>

          <!-- 數量 -->
          <template #body-cell-quantity="props">
            <q-td :props="props">
              <div class="cart_quantity">
                {{ props.row.quantity }}
                <q-btn icon="remove" color="secondary" @click="updateCart(props.row.p_id._id,props.row.quantity-1,props.row.price)" />
                <q-btn icon="add" color="secondary" @click="updateCart(props.row.p_id._id,props.row.quantity+1,props.row.price)" />
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
                <q-btn square color="secondary" icon="edit" :props="props" @click="updateCart(props.row.p_id._id,props.row.quantity*-1,props.row.price)" />
              </div>
            </q-td>
          </template>
        </q-table>
      </div>
      <div class="row q-mx-auto">
        <div class="col-12">
          {{ totalPrice }}
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

const columns = [

  {
    name: 'shopping_id',
    required: true,
    label: '訂單編號',
    align: 'left',
    field: row => row.name,
    sortable: true
  }, {
    name: 'images',
    required: true,
    label: '商品圖片',
    align: 'left',
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
const { editCart } = user
const cart = reactive([])
const totalPrice = ref(0)
const $q = useQuasar()

const updateCart = async (idx, quantity, price) => {
  await editCart({ id: cart[idx].p_id._id, quantity, price })
  cart[idx].quantity += quantity
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
