<template>
  <div class="q-pa-md">
    <q-table
      v-model:selected="selected"
      title="商品清單"
      :rows="rows"
      :columns="columns"
      row-key="name"
      selection="multiple"
    >
      <!-- 圖片 -->
      <template #body-cell-image="props">
        <q-td :props="props">
          <div class="productsImage">
            <img :src="props.value">
          </div>
        </q-td>
      </template>

      <!-- 標籤 -->
      <template #body-cell-category="props">
        <q-td :props="props">
          <div>
            <q-badge color="primary" :label="props.value" />
          </div>
          <div class="my-table-details">
            {{ props.row.details }}
          </div>
        </q-td>
      </template>

      <!-- 上架狀態 -->
      <template #body-cell-sell="props">
        <q-td :props="props">
          <div class="productsSell">
            <q-toggle
              v-model="sell"
              :label="sell"
              color="primary"
              false-value="未上架"
              true-value="上架"
            />
          </div>
        </q-td>
      </template>

      <!-- 操作 -->
      <template #body-cell-others="props">
        <q-td :props="props">
          <div class="productsOthers">
            <q-btn square color="secondary" icon="edit" @click="openDialog(1)" />
            <q-btn square color="negative" icon="delete" @click="delItem()" />
          </div>
        </q-td>
      </template>
    </q-table>

    <!-- 新增按鈕 -->
    <q-btn round color="secondary" icon="add" @click="openDialog(-1)" />

    <!-- <div class="q-mt-md">
      Selected: {{ JSON.stringify(selected) }}
    </div> -->
  </div>

  <!-- dialog -->
  <q-dialog v-if="form.dialog" persistent>
    <q-form
      class="q-gutter-md"
      @submit="onSubmit"
      @reset="onReset"
    >
      <q-input
        v-model="name"
        filled
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ rules.required,rules.price]"
      />

      <q-input
        v-model="age"
        filled
        type="number"
        label="Your age *"
        lazy-rules
        :rules="[ rules.required,rules.price]"
      />

      <q-input
        v-model="categories"
        filled
        type="number"
        label="Your age *"
        lazy-rules
        :rules="[ rules.required,rules.price]"
      />

      <q-toggle v-model="form.sell" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary" @click="submit" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" @click="Reset" />
      </div>
    </q-form>
  </q-dialog>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { apiAuth } from '@/boot/axios.js'

const selected = ref([])

// 行(橫))
const columns = [
  {
    name: 'name',
    required: true,
    label: '商品名稱',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  { name: 'image', align: 'center', label: '圖片', field: '圖片', sortable: true },
  { name: 'category', label: '標籤', field: '標籤', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'gamer', label: '遊戲人數', field: '遊戲人數', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'age', label: '適玩年齡', field: '適玩年齡', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'rules', label: '遊戲說明', field: '遊戲說明' },
  { name: 'price', label: '商品價格', field: '商品價格', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'sell', label: '上架狀態', field: '上架狀態' },
  { name: 'others', label: '操作', field: '操作' }
]

// 列(縱)
const rows = reactive([
  {
    商品名稱: 'Frozen Yogurt',
    圖片: 159,
    標籤: 6.0,
    遊戲人數: 24,
    適玩年齡: 4.0,
    遊戲說明: '1%',
    商品價格: '14%',
    上架狀態: '未上架'
  }
])

const categories = ['派對遊戲', '策略遊戲', '陣營遊戲', '親子遊戲', '紙牌遊戲', '其他遊戲', '暢銷遊戲', '最新上架', '撿便宜', '八成新', '近全新']

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  price (value) {
    return value >= 0 || '價格錯誤'
  }
}
const products = reactive([])

const form = reactive({
  _id: '',
  name: '',
  image: '',
  category: '',
  gamer: 0,
  age: 0,
  rules: '',
  price: 0,
  sell: false,
  dialog: false,
  idx: -1
})

const openDialog = async (idx) => {
  // 新增
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.price = 0
    form.description = ''
    form.image = undefined
    form.sell = false
    form.category = ''
    form.valid = false
    form.loading = false
    form.idx = -1
  } else {
    form._id = products[idx]._id
    form.name = products[idx].name
    form.price = products[idx].price
    form.description = products[idx].description
    form.image = undefined
    form.sell = products[idx].sell
    form.category = products[idx].category
    form.valid = false
    form.loading = false
    form.idx = idx
  }
  form.dialog = true
}

const submit = async () => {
  // fd.append(key, value)
  const fd = new FormData()
  fd.append('name', form.name)
  fd.append('price', form.price)
  fd.append('description', form.description)
  fd.append('image', form.image)
  fd.append('sell', form.sell)
  fd.append('category', form.category)

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/products', fd)
      products.push(data.result)
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
      products[form.idx] = data.result
    }
    form.dialog = false
  } catch (error) {
    console.log(error)
  }

  form.loading = false
}

(async () => {
  try {
    const { data } = await apiAuth.get('/products/all')
    products.push(...data.result)
  } catch (error) {
    console.log(error)
  }
})()

</script>
