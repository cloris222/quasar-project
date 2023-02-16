<template>
  <div id="OrderView">
    <div class="container">
      <!-- 大圖 -->
      <div class="row q-mx-auto">
        <div class="col-12 order_img">
          <img src="@/assets/undraw_game_day_ucx9.svg">
        </div>
      </div>
      <!-- 預約須知 -->
      <div class="row">
        <div class="col-12">
          <ul>
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
        <q-stepper
          ref="stepper"
          v-model="step"
          alternative-labels
          color="primary"
          animated
        >
          <q-step
            :name="1"
            title="開始預約吧！"
            icon="edit"
            :done="step > 1"
          >
            For each ad campaign that you create, you can control how much you're willing to
            spend on clicks and conversions, which networks and geographical locations you want
            your ads to show on, and more.
          </q-step>

          <q-step
            :name="2"
            title="確認預約資訊"
            icon="info"
            :done="step > 2"
          >
            An ad group contains one or more ads which target a shared set of keywords.
          </q-step>

          <q-step
            :name="3"
            title="確認預約資訊"
            icon="add_comment"
          >
            Try out different ad text to see what brings in the most customers, and learn how to
            enhance your ads using features like ad extensions. If you run into any problems with
            your ads, find out how to tell if they're running and how to resolve approval issues.
          </q-step>

          <template #navigation>
            <q-stepper-navigation>
              <q-btn color="primary" :label="step === 3 ? 'Finish' : 'Continue'" @click="$refs.stepper.next()" />
              <q-btn v-if="step > 1" flat color="primary" label="Back" class="q-ml-sm" @click="$refs.stepper.previous()" />
            </q-stepper-navigation>
          </template>
        </q-stepper>

        <!-- 選擇人數 日期 -->
        <div class="row">
          <div id="chooseParticipant" class="col-4">
            <q-select v-model="form.participant" outlined :options="participantOptions" label="請選擇人數" />
          </div>
          <div id="chooseorderDate" class="col-4">
            <q-input v-model="form.orderDate" outlined mask="date" :rules="['date']">
              <template #append>
                <q-icon name="event" class="cursor-pointer">
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
        <div class="row">
          <div class="col-12">
            <q-card>
              <!-- 標題 -->
              <q-card-section>
                <q-card-section>
                  預約時段
                </q-card-section>
                <q-card-section>
                  *灰色表示該時間已客滿，可點選檢視其他可訂位日期。欲預約非營業時間可洽FB粉專。
                </q-card-section>
              </q-card-section>
              <!-- 選擇時段 -->
              <q-card-section>
                <q-btn v-for="(btn,i) in orderTimeBtn" :key="i" :label="btn.time" :disable="orderTimeBtn.available" @click="form.time=btn.time" />
              </q-card-section>
              <q-card-section>
                如有訂位以外的需求，請撥打電話與我們聯繫
                0223941157
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- 確認資訊 -->
        <div class="column">
          <div class="col-12">
            <q-card>
              <q-card-section>
                您已選擇預約 桌下吧泰山店
                <q-btn :label="`${form.participant}人`" to="#chooseParticipant" />
                >
                <q-btn :label="`${form.orderDate}`" to="#chooseorderDate" />
                >
                <q-btn :label="`${form.time}`" />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12">
            <q-card>
              <q-card-section>
                <div>
                  <q-btn label="Submit" type="submit" color="primary" />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
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

const router = useRouter()
const participant = ref(2)
const date = new Date()

const participantOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']
const orderDate = ref(`${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`)
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
  orderDate,
  orderonDate: new Date(),
  participant,
  time: '',
  hours: 0,
  others: '',
  message: ''
})

// 使用者選擇日期後發送請求取得該天預約情況
watch(() => form.orderDate, async (newValue, oldValue) => {
  console.log('form.orderDate 變更', newValue, oldValue)
  try {
    if (!form.orderDate) {
      orderTimeBtn.forEach(btn => {
        btn.available = false
        return btn
      })
      return
    }

    // 使按鈕全部恢復成available狀態
    orderTimeBtn.forEach(btn => {
      btn.available = true
      return btn
    })

    form.time = ''
    form.hours = 0

    const orderTimeandHour = reactive([])
    // 使用者選擇日期發出請求
    const { data } = await apiAuth.post('/orders/getDate', { orderDate: newValue })
    // 將從後端發送回來的(time&hours)push進orderTimeandHour
    orderTimeandHour.push((data.result).forEach((info) => {
      orderTimeandHour.time = info.time
      orderTimeandHour.hours = info.hours
    }))
    console.log(orderTimeandHour)

    // orderTimeandHour 做forEach 將被預約的btn.available = false
    orderTimeandHour.forEach((info) => {
      const idx = orderTimeBtn.findIndex((btn) => {
        return btn.time === info.time
      })
      // 從該被預約按鈕開始往後hours的按鈕改為disable
      for (let i = idx; i < idx + info.hours; i++) {
        orderTimeBtn[i].available = false
        // 迴圈跑到最後一個按鈕時return
        if (orderTimeBtn[i] === orderTimeBtn[(orderTimeBtn.length) - 1]) return
      }
      orderTimeBtn[idx].available = false
    })
  } catch (error) {

  }
}, { deep: true })

// onsubmit送出表單
const onSubmit = async () => {
  try {
    await apiAuth.post('/', ({
      u_id: form.u_id,
      name: form.name,
      phone: form.phone,
      orderDate: form.orderDate,
      orderonDate: form.orderonDate,
      participant: form.participant,
      time: form.time,
      hours: form.hours,
      others: form.others,
      message: '預約成功'
    }))
    router.push('/')
  } catch (error) {

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

</script>
