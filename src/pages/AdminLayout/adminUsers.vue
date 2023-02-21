<template>
  <div id="adminUsersView">
    <div class="container q-mx-auto">
      <!-- 標題 -->
      <div class="row q-mx-auto">
        <div class="col-12 bigTitle">
          會員管理
        </div>
      </div>
      <!-- 會員表格 -->
      <div class="row q-mx-auto ">
        <div class="col-12">
          <q-table
            :rows="usersList"
            :columns="columns"
            row-key="name"
            class="q-mt-lg"
          >
            <!-- 會員編號 -->
            <template #body-cell-id="props">
              <q-td :props="props">
                <div class="users_id">
                  {{ props.row._id }}
                </div>
              </q-td>
            </template>

            <!-- 會員帳號 -->
            <template #body-cell-account="props">
              <q-td :props="props">
                <div class="users_accout">
                  {{ props.row.account }}
                </div>
              </q-td>
            </template>

            <!-- 會員姓名-->
            <template #body-cell-name="props">
              <q-td :props="props">
                <div class="users_name">
                  {{ props.row.name }}
                </div>
              </q-td>
            </template>

            <!-- 會員信箱 -->
            <template #body-cell-email="props">
              <q-td :props="props">
                <div>
                  {{ props.row.email }}
                </div>
              </q-td>
            </template>

            <!-- 會員電話 -->
            <template #body-cell-phone="props">
              <q-td :props="props">
                <div>
                  {{ props.row.phone }}
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
    name: 'id',
    required: true,
    label: '會員編號',
    align: 'left',
    field: row => row.name
  },
  {
    name: 'account',
    required: true,
    label: '會員帳號',
    align: 'left',
    field: row => row.name
  }, {
    name: 'name',
    required: true,
    label: '會員姓名',
    align: 'center',
    field: row => row.name,
    sortable: true
  },
  { name: 'email', align: 'center', label: '會員信箱', field: row => row.name },
  { name: 'phone', align: 'center', label: '會員電話', field: row => row.name }

]

const usersList = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    console.log(data)
    usersList.push(...data.result)
  } catch (error) {
    $q.notify({
      position: 'top',
      message: error?.response?.data?.message || '取得會員資料失敗',
      color: 'negative'
    })
  }
})()
</script>
