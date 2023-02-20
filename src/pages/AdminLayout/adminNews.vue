<template>
  <div id="adminNews">
    <div class="q-pa-md">
      <q-table
        v-model:selected="selected"
        title="公告清單"
        :rows="news"
        :columns="columns"
        row-key="name"
        class="q-mt-lg"
      >
        <!-- 公告日期 -->
        <template #body-cell-date="props">
          <q-td :props="props">
            <div>
              {{ new Date(props.row.date).toLocaleDateString() }}
            </div>
          </q-td>
        </template>

        <!-- 標題 -->
        <template #body-cell-title="props">
          <q-td :props="props" class="text-center ">
            <p class="title_area">
              {{ props.row.title }}
            </p>
          </q-td>
        </template>

        <!-- 圖片 -->
        <template #body-cell-images="props">
          <q-td :props="props">
            <div class="newsImg">
              <img :props="props" :src="props.row.images[0]">
            </div>
          </q-td>
        </template>

        <!-- 公告內文 -->
        <template #body-cell-description="props">
          <q-td :props="props" class="text-center ">
            <p class="description_area">
              {{ props.row.description }}
            </p>
          </q-td>
        </template>

        <!-- 上架狀態 -->
        <template #body-cell-sell="props">
          <q-td :props="props">
            <div class="newsSell">
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
            <div class="newsOthers">
              <q-btn square color="secondary" icon="edit" :props="props" @click="openDialog(news.findIndex(item=>item._id===props.row._id))" />
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
            {{ form._id.length > 0 ? '編輯公告' : '新增公告' }}
          </div>
          <q-space />
          <q-btn v-close-popup icon="close" flat round dense />
        </q-card-section>

        <q-form
          class="q-gutter-md"
          :style="{width:'500px'}"
          @submit="onSubmit"
        >
          <!-- 日期 -->
          <q-input v-model="form.date" outlined label="請選擇公告日期">
            <template #append>
              <q-icon name="event" class="cursor-pointer" color="primary">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="form.date" today-btn>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="確認" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <!-- 標題 -->
          <q-input
            v-model="form.title"
            type="text"
            outlined
            label="請輸入公告標題 *"
            lazy-rules
            :rules="[ rules.required]"
          />

          <!-- 圖片 -->
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

          <!-- 公告內容 -->
          <q-input
            v-model="form.description"
            outlined
            type="text"
            label="請輸入公告內容 *"
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
    name: 'date',
    required: true,
    label: '公告日期',
    align: 'left',
    field: row => row.name,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  { name: 'title', align: 'center', label: '公告標題', field: row => row.name },
  { name: 'images', align: 'center', label: '圖片', field: row => row.name },
  { name: 'description', align: 'center', label: '公告內文', field: row => row.name },
  { name: 'sell', align: 'center', label: '上架狀態', field: row => row.name },
  { name: 'others', align: 'center', label: '操作', field: row => row.others }
]

const rules = {
  required (value) {
    return !!value || '欄位必填'
  }
}
const news = reactive([])

const date = new Date()

const form = reactive({
  _id: '',
  date,
  title: '',
  images: [],
  description: '',
  sell: false,
  dialog: false,
  idx: -1,
  loading: false
})

const openDialog = async (idx) => {
  // 新增
  if (idx === -1) {
    form._id = ''
    form.date = ''
    form.title = ''
    form.images = []
    form.description = ''
    form.sell = false
    form.idx = -1
  } else {
    form._id = news[idx]._id
    form.date = news[idx].date
    form.title = news[idx].title
    form.images = news[idx].images
    form.description = news[idx].description
    form.sell = news[idx].sell
    form.idx = idx
  }
  form.dialog = true
}

const onSubmit = async () => {
  // fd.append(key, value)
  form.loading = true
  const fd = new FormData()
  fd.append('date', form.date)
  for (const image of form.images) {
    fd.append('images', image)
  }
  fd.append('title', form.title)
  fd.append('age', form.age)
  fd.append('description', form.description)
  fd.append('sell', form.sell)

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/news', fd)
      news.push(data.result)
      $q.notify({
        position: 'top',
        message: '新增成功',
        color: 'secondary',
        avatar: `https://source.boringavatars.com/beam/256/${user.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`
      })
    } else {
      const { data } = await apiAuth.patch('/news/' + form._id, fd)
      news[form.idx] = data.result
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

form.date = ref(`${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`);

(async () => {
  try {
    const { data } = await apiAuth.get('/news/all')
    news.push(...data.result)
  } catch (error) {
    console.log(error)
  }
})()

</script>
