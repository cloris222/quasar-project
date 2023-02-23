<template>
  <div id="adminBoardGameList">
    <div class="container">
      <div class="row q-ml-md">
        <div class="col-12 bigTitle">
          桌遊清單
        </div>
      </div>
      <div class="q-pa-md">
        <q-table
          v-model:selected="selected"
          title="桌遊清單"
          :rows="boardGameList"
          :columns="columns"
          row-key="name"
          class="q-mt-lg"
        >
          <!-- 圖片 -->
          <template #body-cell-images="props">
            <q-td :props="props">
              <div class="img_area text-center">
                <img :props="props" :src="props.row.images[0]">
              </div>
            </q-td>
          </template>

          <!-- 標籤 -->
          <template #body-cell-category="props">
            <q-td :props="props">
              <div>
                <q-chip v-for="(item,i) in props.row.category" :key="i" color="primary" :label="item" text-color="white" />
              </div>
            </q-td>
          </template>

          <!-- 說明 -->
          <template #body-cell-rules="props">
            <q-td :props="props">
              <p class="rules_area text-center">
                {{ props.row.rules }}
              </p>
            </q-td>
          </template>

          <!-- 上架狀態 -->
          <template #body-cell-sell="props">
            <q-td :props="props">
              <div class="sell_area">
                <q-toggle
                  v-model="props.row.sell"
                  :props="props"
                  :label="sell"
                  color="primary"
                />
              </div>
            </q-td>
          </template>

          <!-- 操作 -->
          <template #body-cell-others="props">
            <q-td :props="props">
              <div class="others_area">
                <q-btn square color="secondary" icon="edit" :props="props" @click="openDialog(boardGameList.findIndex(item=>item._id===props.row._id))" />
              </div>
            </q-td>
          </template>
        </q-table>

        <!-- 新增按鈕 -->
        <q-btn round color="primary" icon="add" class="addBtn q-mt-md " size="lg" @click="openDialog(-1)" />

        <!-- <div class="q-mt-md">
      Selected: {{ JSON.stringify(selected) }}
    </div> -->
      </div>

      <!-- dialog -->
      <q-dialog v-model="form.dialog" persistent>
        <q-card class="q-px-md">
          <q-card-section class="row items-center q-pb-md">
            <div class="text-h6">
              {{ form._id.length > 0 ? '編輯桌遊清單' : '新增桌遊清單' }}
            </div>
            <q-space />
            <q-btn v-close-popup icon="close" flat round dense />
          </q-card-section>

          <q-form
            class="q-gutter-md"
            :style="{width:'500px'}"
            @submit="onSubmit"
          >
            <q-input
              v-model="form.name"
              type="text"
              outlined
              label="請輸入桌遊名稱 *"
              lazy-rules
              :rules="[ rules.required]"
            />

            <q-file
              v-model="form.images"
              label="請選擇要上傳的圖片"
              outlined
              counter
              max-files="10"
              multiple
              style="max-width: 300px"
              :rules="[ rules.required]"
            >
              <template #prepend>
                <q-icon name="add" />
              </template>
            </q-file>

            <q-select
              v-model="form.category"
              outlined
              use-input
              multiple
              input-debounce="0"
              label="請選擇標籤"
              :options="options"
              style="width: 250px"
              behavior="menu"
              :rules="[ rules.required]"
              @filter="filterFn"
            >
              <template #no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>

            <q-input
              v-model="form.gamer"
              outlined
              type="text"
              label="請選擇遊戲人數 *"
              lazy-rules
              :rules="[ rules.required]"
            />

            <q-input
              v-model="form.age"
              outlined
              type="number"
              label="請輸入適玩年齡 *"
              lazy-rules
              :rules="[ rules.required]"
            />

            <q-input
              v-model="form.rules"
              outlined
              type="textarea"
              label="請輸入遊戲說明 *"
              lazy-rules
              :rules="[ rules.required]"
            />

            <q-toggle v-model="form.sell" label="是否上架" />

            <div>
              <q-card-actions align="center">
                <q-btn label="確認" type="submit" color="primary" :loading="form.loading" size="md" />
              </q-card-actions>
            </div>
          </q-form>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { apiAuth } from '@/boot/axios.js'
import { useQuasar } from 'quasar'
import { useUserStore } from 'src/stores/users'

const $q = useQuasar()
const user = useUserStore()

const selected = ref([])

// 行(橫))
const columns = [
  {
    name: 'name',
    required: true,
    label: '桌遊名稱',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  { name: 'images', align: 'center', label: '圖片', field: row => row.images },
  { name: 'category', align: 'center', label: '標籤', field: row => row.category },
  { name: 'gamer', align: 'center', label: '遊戲人數', field: row => row.gamer },
  { name: 'age', align: 'center', label: '適玩年齡', field: row => row.age },
  { name: 'rules', align: 'center', label: '遊戲說明', field: row => row.rules },
  { name: 'sell', align: 'center', label: '上架狀態', field: row => row.sell },
  { name: 'others', align: 'center', label: '操作', field: row => row.others }
]

// 類別選擇filter
const categories = ['派對遊戲', '策略遊戲', '陣營遊戲', '親子遊戲', '紙牌遊戲', '其他遊戲', '熱門遊戲', '最新遊戲', '新手友善']
const options = ref(categories)

const filterFn = (val, update) => {
  if (val === '') {
    update(() => {
      options.value = categories
    })
    return
  }
  update(() => {
    const needle = val.toLowerCase()
    options.value = categories.filter(v => v.toLowerCase().indexOf(needle) > -1)
  })
}

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  price (value) {
    return value >= 0 || '價格錯誤'
  }
}
const boardGameList = reactive([])

const form = reactive({
  _id: '',
  name: '',
  images: [],
  category: [],
  gamer: 0,
  age: 0,
  rules: '',
  sell: false,
  dialog: false,
  idx: -1,
  loading: false
})

const openDialog = async (idx) => {
  // 新增
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.images = []
    form.category = []
    form.gamer = 0
    form.age = 0
    form.rules = ''
    form.sell = false
    form.idx = -1
  } else {
    form._id = boardGameList[idx]._id
    form.name = boardGameList[idx].name
    form.images = boardGameList[idx].images
    form.category = boardGameList[idx].category
    form.gamer = boardGameList[idx].gamer
    form.age = boardGameList[idx].age
    form.rules = boardGameList[idx].rules
    form.sell = boardGameList[idx].sell
    form.idx = idx
  }
  form.dialog = true
}

const onSubmit = async () => {
  // fd.append(key, value)
  form.loading = true
  const fd = new FormData()
  fd.append('name', form.name)
  console.log(form.images)
  for (const image of form.images) {
    fd.append('images', image)
  }
  for (const item of form.category) {
    fd.append('category', item)
  }
  fd.append('gamer', form.gamer)
  fd.append('age', form.age)
  fd.append('rules', form.rules)
  fd.append('sell', form.sell)

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/boardGameList', fd)
      boardGameList.push(data.result)
      $q.notify({
        position: 'top',
        message: '新增成功',
        color: 'secondary',
        avatar: `https://source.boringavatars.com/beam/256/${user.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`
      })
    } else {
      const { data } = await apiAuth.patch('/boardGameList/' + form._id, fd)
      boardGameList[form.idx] = data.result
      $q.notify({
        position: 'top',
        message: '編輯成功',
        color: 'secondary',
        avatar: `https://source.boringavatars.com/beam/256/${user.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`
      })
    }
    form.dialog = false
  } catch (error) {
    $q.notify({
      position: 'top',
      message: '操作失敗',
      color: 'negative',
      avatar: `https://source.boringavatars.com/beam/256/${user.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`
    })
  }

  form.loading = false
}

(async () => {
  try {
    const { data } = await apiAuth.get('/boardGameList/all')
    boardGameList.push(...data.result)
  } catch (error) {
    console.log(error)
  }
})()

</script>
