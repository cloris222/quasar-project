<template>
  <div id="adminOrdersView">
    <div class="container q-mx-auto">
      <!-- 標題 -->
      <div class="row q-mx-auto">
        <div class="col-12">
          <h4>所有預約</h4>
        </div>
      </div>
      <!-- 預約表格 -->
      <div class="row q-mx-auto ">
        <div class="col-12">
          <q-table
            :rows="orders"
            :columns="columns"
            row-key="name"
            class="q-mt-lg"
          >
            <!-- 預約編號 -->
            <template #body-cell-orders_id="props">
              <q-td :props="props">
                <div class="orders_id">
                  {{ props.row._id }}
                </div>
              </q-td>
            </template>

            <!-- 預約人 -->
            <template #body-cell-orders_u_id="props">
              <q-td :props="props">
                <div class="orders_id">
                  {{ props.row.name }}
                </div>
              </q-td>
            </template>

            <!-- 預約人電話 -->
            <template #body-cell-orders_phone="props">
              <q-td :props="props">
                <div class="orders_phone">
                  {{ props.row.phone }}
                </div>
              </q-td>
            </template>

            <!-- 預約日期 -->
            <template #body-cell-date="props">
              <q-td :props="props">
                <div>
                  {{ new Date(props.row.orderDate).toLocaleDateString() }}
                </div>
              </q-td>
            </template>

            <!-- 預約時段 -->
            <template #body-cell-time="props">
              <q-td :props="props">
                <div>
                  {{ props.row.time }}
                </div>
              </q-td>
            </template>

            <!-- 預約時數 -->
            <template #body-cell-hours="props">
              <q-td :props="props">
                <div>
                  {{ props.row.hours }}
                </div>
              </q-td>
            </template>

            <!-- 預約人數 -->
            <template #body-cell-participant="props">
              <q-td :props="props">
                <div>
                  {{ props.row.participant }}位
                </div>
              </q-td>
            </template>

            <!-- 預約人數 -->
            <template #body-cell-others="props">
              <q-td :props="props">
                <div>
                  {{ props.row.others }}
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
    name: 'orders_id',
    required: true,
    label: '預約編號',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  {
    name: 'orders_u_id',
    required: true,
    label: '預約人',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  {
    name: 'orders_phone',
    required: true,
    label: '預約人電話',
    align: 'left',
    field: row => row.name,
    sortable: true
  }, {
    name: 'date',
    required: true,
    label: '預約日期',
    align: 'center',
    field: row => row.name,
    sortable: true
  },
  { name: 'time', align: 'center', label: '預約時段', field: row => row.name },
  { name: 'hours', align: 'center', label: '預約時數', field: row => row.name },
  { name: 'participant', align: 'center', label: '預約人數', field: row => row.name },
  { name: 'others', align: 'center', label: '備註', field: row => row.name }

]

const orders = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    console.log(data)
    orders.push(...data.result)
  } catch (error) {
    $q.notify({
      position: 'top',
      message: error?.response?.data?.message || '取得預約失敗',
      color: 'negative'
    })
  }
})()
</script>
