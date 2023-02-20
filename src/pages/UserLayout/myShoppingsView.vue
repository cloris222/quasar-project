<template>
  <div id="ShoppingsView">
    <div class="container q-mx-auto">
      <!-- 標題 -->
      <div class="row q-mx-auto">
        <div class="col-12 bigTitle">
          <h4>我的訂單</h4>
        </div>
      </div>
      <!-- 訂單表格 -->
      <div class="row q-mx-auto ">
        <div class="col-12">
          <q-table
            :rows="shoppings"
            :columns="columns"
            row-key="name"
            class="q-mt-lg"
          >
            <!-- 訂單編號 -->
            <template #body-cell-shopping_id="props">
              <q-td :props="props">
                <div class="cart_shopping_id">
                  {{ props.row._id }}
                </div>
              </q-td>
            </template>

            <!-- 訂單日期 -->
            <template #body-cell-date="props">
              <q-td :props="props" class="text-center">
                <div>
                  {{ new Date(props.row.date).toLocaleDateString() }}
                </div>
              </q-td>
            </template>

            <!-- 訂單金額 -->
            <template #body-cell-price="props">
              <q-td :props="props" class="text-center ">
                <div class="cart_price">
                  {{ props.row.totalPrice }}
                </div>
              </q-td>
            </template>

            <!-- 商品細項 -->
            <template #body-cell-detail="props">
              <q-td :props="props" class="text-center ">
                <div class="cart_detail">
                  <ul>
                    <li v-for="(product,i) in props.row.products" :key="i">
                      {{ product.p_id.name+' X '+product.quantity }}
                    </li>
                  </ul>
                </div>
              </q-td>
            </template>
          </q-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '@/boot/axios.js'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const columns = [

  {
    name: 'shopping_id',
    required: true,
    label: '訂單編號',
    align: 'left',
    field: row => row.name,
    sortable: true
  }, {
    name: 'date',
    required: true,
    label: '訂單日期',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  { name: 'price', align: 'center', label: '訂單金額', field: row => row.name },
  { name: 'detail', align: 'center', label: '商品細項', field: row => row.name }
]

const shoppings = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/shoppings')
    console.log(data)
    shoppings.push(...data.result.map(shopping => {
      shopping.totalPrice = shopping.products.reduce((total, current) => total + current.price * current.quantity, 0)
      return shopping
    }))
  } catch (error) {
    $q.notify({
      position: 'top',
      message: error?.response?.data?.message || '取得訂單失敗',
      color: 'negative'
    })
  }
})()
</script>
