<template>
  <div id="OrderView">
    <div class="container q-mx-auto q-mt-lg q-mb-lg">
      <!-- 大圖 -->
      <div class="row q-my-xl ">
        <div class="col-4 order_img">
          <img src="@/assets/undraw_game_day_ucx9.svg">
        </div>
        <div class="col-8">
          <!-- 預約須知 -->
          <ul class="ordertoknow">
            <li>
              座位保留20分鐘，若會晚到超過20分鐘請電話告知。若不便前來，請取消預約。
            </li>
            <li>
              攜帶酒類飲品酌收每桌$200開瓶費。另有提供冰桶及杯子。
            </li>
            <li>
              可攜帶外食或叫外送，外食垃圾請自行帶走，一起維護良好的遊玩環境，若需協助處理外食垃圾酌收20$/人清潔費。
            </li>
            <li>
              因現場空間吵雜，不建議帶2歲以下嬰幼兒參與聚會喔。
            </li>
          </ul>
        </div>
      </div>

      <!-- 預約表單 -->

      <q-form
        class="q-gutter-md"
        @submit="onSubmit"
      >
        <q-card class="orderForm q-mx-auto q-mt-lg">
          <q-card-section horizontal>
            <div class="row left_area">
              <q-card-section>
                <div class="row ">
                  <div class="col-5 left_participant q-mr-lg">
                    <div class="title">
                      預約人數
                    </div>
                    <q-select v-model="form.participant" rounded outlined bottom-slots color="white" :options="participantOptions" label="請選擇人數">
                      <template #prepend>
                        <q-icon name="supervisor_account" color="primary" />
                      </template>
                    </q-select>
                  </div>
                  <div class="col-5 left_orderDate">
                    <div class="title">
                      預約日期
                    </div>
                    <q-input v-model="form.orderDate" rounded outlined label="請選擇預約日期">
                      <template #append>
                        <q-icon name="event" class="cursor-pointer" color="primary">
                          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-date v-model="form.orderDate">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="確認" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                </div>
              </q-card-section>

              <q-card-section>
                <div class="col-12 left_orderTime">
                  <div class="orderTimeTitle">
                    <div class="title">
                      預約時段
                    </div>
                    <div class="caption">
                      *灰色表示該時間已客滿，可點選檢視其他可訂位日期。欲預約非營業時間可洽FB粉專。
                    </div>
                  </div>
                  <q-card-section>
                    <div>
                      <q-btn v-for="(btn,i) in orderTimeBtn" :key="i" :label="btn.time" color="primary" class="orderTimeBtn q-mr-lg q-mb-lg" outline size="lg" :disable="!btn.available" @click="form.time=btn.time" />
                    </div>
                  </q-card-section>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="row left_orderHours">
                  <div class="col-5">
                    <div class="title">
                      預約時數
                    </div>
                    <q-select v-model="form.hours" color="secondary" :options="orderHoursOptions" label="請選擇預約時數" rounded outlined bottom-slots>
                      <template #prepend>
                        <q-icon name="schedule" color="primary" />
                      </template>
                    </q-select>
                  </div>
                </div>
              </q-card-section>
            </div>
            <div class="row right_area">
              <q-card-section>
                <div class="col-12 right_title">
                  確認預約資訊
                </div>
              </q-card-section>
              <q-card-section>
                <div class="col-10 right_checkInfo">
                  <q-card class="rightCheckInfoCard">
                    <div class="row">
                      <div class="col-6">
                        <q-card-section>
                          <div class="rightInfo_name">
                            姓名：
                            <br>
                            {{ name }}
                          </div>
                        </q-card-section>
                        <q-card-section>
                          <div class="rightInfo_phone">
                            電話：
                            <br>
                            {{ phone }}
                          </div>
                        </q-card-section>
                        <q-card-section>
                          <div class="rightInfo_email">
                            信箱：
                            <br>
                            {{ email }}
                          </div>
                        </q-card-section>
                      </div>
                      <div class="col-6">
                        <q-card-section>
                          <div class="checkOrder_participant">
                            人數：
                            {{ form.participant }}
                          </div>
                        </q-card-section>
                        <q-card-section>
                          <div class="checkOrder_orderDate">
                            日期：
                            {{ form.orderDate }}
                          </div>
                        </q-card-section>
                        <q-card-section>
                          <div class="checkOrder_orderTime">
                            時段：
                            {{ form.time }}
                          </div>
                        </q-card-section>
                        <q-card-section>
                          <div class="checkOrder_orderHours">
                            時數
                            {{ form.hours }}
                          </div>
                        </q-card-section>
                      </div>
                    </div>
                  </q-card>
                </div>
              </q-card-section>
              <q-card-section>
                <q-btn label="Submit" type="submit" color="secondary" class="q-mx-auto" :loading="form.loading" />
              </q-card-section>
            </div>
          </q-card-section>
        </q-card>
      </q-form>

      <!-- 聯絡我們 -->
      <div class="row q-mx-auto">
        <!-- 店面地址 -->
        <div class="col-6">
          <q-card>
            <q-card-section>
              <q-icon name="pin_drop" />
              <q-card-section>
                <div class="card_title">
                  店面地址
                </div>
                <div class="card_content">
                  新北市泰山區貴子里致遠新村55之1號
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { apiAuth } from '@/boot/axios.js'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/users'

import { useQuasar } from 'quasar'

const $q = useQuasar()

const user = useUserStore()
const { name, phone, email } = user

const router = useRouter()
const participant = ref(2)
const date = new Date()

const participantOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']
const orderHoursOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const orderTimeBtn = reactive([
  { time: '13:00', available: true },
  { time: '13:30', available: true },
  { time: '14:00', available: true },
  { time: '14:30', available: true },
  { time: '15:00', available: true },
  { time: '15:30', available: true },
  { time: '16:00', available: true },
  { time: '16:30', available: true },
  { time: '17:00', available: true },
  { time: '17:30', available: true },
  { time: '18:00', available: true },
  { time: '18:30', available: true },
  { time: '19:00', available: true },
  { time: '19:30', available: true }
])

// 收資料的form
const form = reactive({
  u_id: '',
  name: '',
  phone: '',
  orderDate: '',
  orderonDate: '',
  participant,
  time: '',
  hours: 0,
  others: '',
  message: '',
  loading: false
})

// 使用者選擇日期後發送請求取得該天預約情況
watch(() => form.orderDate, async (newValue, oldValue) => {
  console.log('form.orderDate 變更', newValue, oldValue)
  try {
    if (!form.orderDate) {
      orderTimeBtn.forEach(btn => {
        btn.available = false
        console.log(btn.available)
        return btn
      })
      return
    }

    // 使按鈕全部恢復成available狀態
    orderTimeBtn.forEach(btn => {
      btn.available = true
      console.log(btn.available)
      return btn
    })

    console.log(orderTimeBtn)

    form.time = ''
    form.hours = 0

    const orderTimeandHour = []
    // 使用者選擇日期發出請求
    const { data } = await apiAuth.post('/orders/getDate', { orderDate: newValue })
    // console.log(data.result)
    // 將從後端發送回來的(time&hours)push進orderTimeandHour
    if (data.result.length > 0) {
      data.result.forEach((info) => {
        orderTimeandHour.push({
          time: info.time,
          hours: info.hours
        })
      })
    } else {
      orderTimeandHour.push({
        time: '',
        hours: 0
      })
    }

    console.log(orderTimeandHour)
    // console.log(Array.isArray(orderTimeandHour))

    // orderTimeandHour 做forEach 將被預約的btn.available = false
    orderTimeandHour.forEach((info) => {
      const idx = orderTimeBtn.findIndex((btn) => {
        console.log(info)
        return btn.time === info.time
      })
      // 從該被預約按鈕開始往後hours的按鈕改為disable
      for (let i = idx; i <= Math.min(idx + info.hours, orderTimeBtn.length - 1); i++) {
        // console.log(orderTimeBtn)
        if (orderTimeBtn[i]) {
          orderTimeBtn[i].available = false
        }
        // 迴圈跑到最後一個按鈕時return
        if (orderTimeBtn[i] === orderTimeBtn[(orderTimeBtn.length) - 1]) return
      }
    })

    console.log(orderTimeBtn)
  } catch (error) {
    console.log(error)
  }
}, { deep: true })

// onsubmit送出表單
const onSubmit = async () => {
  form.loading = true
  try {
    // form._id 為orders的_id
    console.log(form)
    await apiAuth.post('/orders', ({
      orderDate: form.orderDate,
      orderonDate: form.orderonDate,
      participant: form.participant,
      time: form.time,
      hours: form.hours,
      others: form.others
    }))
    form.message = '預約成功'
    form.loading = false
    $q.notify({
      position: 'top',
      message: form.message,
      color: 'secondary',
      avatar: `https://source.boringavatars.com/beam/256/${user.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`
    })
    router.push('/myOrders')
  } catch (error) {
    $q.notify({
      position: 'top',
      message: error?.response?.data?.message || '操作失敗',
      color: 'secondary'
    })
  }
}

// 使用者選擇時數時不得超出max
// const max = computed(() => {
//   const startIdx = orderTimeBtn.findIndex(btn => btn.time === form.time)
//   if (startIdx > -1) {
//     let i = startIdx
//     while (orderTimeBtn[i] && orderTimeBtn[i].available) {
//       i++
//     }
//     return (i - startIdx)
//   } else return 7 // 總共 7 個時段
// })

form.orderDate = ref(`${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`)
</script>
