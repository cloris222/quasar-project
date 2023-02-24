<template>
  <div id="OrderView">
    <div class="container q-mx-auto q-mt-lg q-mb-lg">
      <!-- 麵包屑 -->
      <div class="row">
        <div class="col-12">
          <q-breadcrumbs class="text-primary" active-color="grey">
            <template #separator>
              <q-icon
                size="1.5em"
                name="chevron_right"
                color="primary"
              />
            </template>
            <q-breadcrumbs-el label="首頁" icon="home" to="/" />
            <q-breadcrumbs-el label="立即預約" icon="event" />
          </q-breadcrumbs>
        </div>
      </div>
      <div class="col-12 q-mt-xl bigTitle">
        預約須知
      </div>
      <!-- 大圖 -->
      <div class="row bigimg q-my-xl ">
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
                    <q-select v-model="form.participant" outlined bottom-slots color="white" :options="participantOptions">
                      <template #prepend>
                        <q-icon name="supervisor_account" color="primary" />
                      </template>
                    </q-select>
                  </div>
                  <div class="col-5 left_orderDate">
                    <div class="title">
                      預約日期
                    </div>
                    <q-input v-model="form.orderDate" outlined>
                      <template #append>
                        <q-icon name="event" class="cursor-pointer" color="primary">
                          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-date v-model="form.orderDate" today-btn>
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
                      <q-btn v-for="(btn,i) in orderTimeBtn" :key="i" :label="btn.time" color="primary" class="orderTimeBtn q-mr-lg q-mb-lg" outline size="lg" :disable="!btn.available" @click="form.time = btn.time" />
                    </div>
                  </q-card-section>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="row left_orderHours">
                  <div class="col-5 q-mr-lg">
                    <div class="title">
                      預約時數
                    </div>
                    <q-select v-model="form.hours" color="secondary" :options="orderHoursOptions" outlined bottom-slots>
                      <template #prepend>
                        <q-icon name="schedule" color="primary" />
                      </template>
                    </q-select>
                  </div>
                  <div class="col-5">
                    <div class="title">
                      備註
                    </div>
                    <q-input
                      v-model="form.others"
                      outlined
                      autogrow
                      type="textarea"
                    />
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
                  <q-card flat bordered class="rightCheckInfoCard">
                    <div class="row">
                      <div class="col-5 q-mr-xl">
                        <q-card-section>
                          <div class="rightInfo_name">
                            姓名：
                            <br>
                            {{ form.name }}
                          </div>
                        </q-card-section>
                        <q-card-section>
                          <div class="rightInfo_phone">
                            電話：
                            <br>
                            {{ form.phone }}
                          </div>
                        </q-card-section>
                        <q-card-section>
                          <div class="rightInfo_email">
                            信箱：
                            <br>
                            {{ form.email }}
                          </div>
                        </q-card-section>
                      </div>
                      <div class="col-5">
                        <q-card-section>
                          <div class="checkOrder_participant">
                            人數：
                            {{ form.participant }}
                          </div>
                        </q-card-section>
                        <q-card-section>
                          <div class="checkOrder_orderDate">
                            日期：
                            <br>
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
                <div class="btn_area">
                  <div class="edit_btn">
                    <q-btn icon="edit" color="secondary" size="lg" label="修改資料" @click="form.dialog = true" />
                  </div>
                  <div class="order_btn">
                    <q-btn
                      icon="today"
                      label="送出預約" type="submit" color="secondary" :loading="form.loading" size="lg" class="checkBtn"
                    />
                  </div>
                </div>
                <q-dialog v-model="form.dialog " persistent>
                  <q-card class="q-px-md">
                    <q-card-section class="row items-center q-pb-md">
                      <div class="text-h6">
                        修改預約資料
                      </div>
                      <q-space />
                      <q-btn v-close-popup icon="close" flat round dense />
                    </q-card-section>

                    <q-form
                      ref="editForm"
                      class="q-gutter-md"
                      :style="{width:'500px'}"
                      @submit.prevent="onEditBtnClick"
                    >
                      <q-card-section>
                        <q-input
                          v-model="editData.name"
                          outlined
                          type="text"
                          label="請輸入姓名 *"
                          lazy-rules
                          :rules="[ rules.required]"
                        />
                      </q-card-section>
                      <q-card-section>
                        <q-input
                          v-model="editData.phone"
                          outlined
                          type="text"
                          label="請輸入電話 *"
                          lazy-rules
                          :rules="[ rules.required,rules.phone]"
                        />
                      </q-card-section>
                      <q-card-section>
                        <q-input
                          v-model="editData.email"
                          outlined
                          type="email"
                          label="請輸入信箱 *"
                          lazy-rules
                          :rules="[ rules.required,rules.email]"
                        />
                      </q-card-section>
                      <q-card-section>
                        <q-btn label="確認" color="primary" type="submit" />
                      </q-card-section>
                    </q-form>
                  </q-card>
                </q-dialog>
              </q-card-section>
            </div>
          </q-card-section>
        </q-card>
      </q-form>

      <!-- 聯絡我們 -->
      <div class="row q-mx-auto">
        <div class="col-12 q-my-xl bigTitle">
          聯絡我們
        </div>
        <div class="col-6 info_map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.702153836036!2d121.41499892414457!3d25.04418003268764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bed3dc9b59%3A0x57e6439a2db0fa2a!2zMjQz5paw5YyX5biC5rOw5bGx5Y2A6LK05a2Q6YeM6Ie06YGg5paw5p2RNTXkuYsx6Jmf5rOw5bGx6IG36KiT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1676725849680!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
        </div>
        <div class="col-6">
          <q-card flat bordered>
            <q-card-section>
              <div class="info_location">
                <q-card-section>
                  <div class="infoTitle">
                    <q-icon name="mdi-map-marker" color="primary" />
                    地址
                  </div>
                  <div class="infoContent">
                    新北市泰山區貴子里致遠新村55之1號
                  </div>
                </q-card-section>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="info_phone">
                <q-card-section>
                  <div class="infoTitle">
                    <q-icon name="mdi-phone" color="primary" />
                    電話
                  </div>
                  <div class="infoContent">
                    02-23941157
                  </div>
                </q-card-section>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="info_time">
                <q-card-section>
                  <div class="infoTitle">
                    <q-icon name="mdi-clock-time-four" color="primary" />
                    營業時間
                  </div>
                  <div class="infoContent">
                    早上10:00至晚上23:00
                  </div>
                </q-card-section>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="info_camption">
                <q-card-section>
                  <div class="infoTitle">
                    <q-icon name="mdi-information" color="primary" />
                    外食規定
                  </div>
                  <div class="infoContent">
                    提供含酒精飲品及多種軟性飲料 （可攜帶外食，自備酒品酌收$200開瓶費）
                  </div>
                </q-card-section>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
  <!-- footer -->
  <div id="footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="info_area">
            地址 : 新北市泰山區貴子里致遠新村55之1號
            <br>
            電話 : 02-23941157
            <br>
            E-mail : admin@gmail.com
            <br>
            營業時間 : 早上10:00至晚上23:00 每週三公休
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="btn_area">
            <q-btn icon="mdi-facebook" outline rounded color="secondary" class="q-mr-lg" />
            <q-btn icon="mdi-instagram" outline rounded color="secondary" class="q-mr-lg" />
            <q-btn icon="mdi-twitter" outline rounded color="secondary" />
          </div>
        </div>
        <div class="col-12">
          <div class="copyright">
            Copyright © 2023 Yung Chien Yang. All rights reserved.
          </div>
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
import validator from 'validator'

import { useQuasar } from 'quasar'

const $q = useQuasar()

const user = useUserStore()
const { name, phone, email } = user

const router = useRouter()
const participant = ref(2)
const date = new Date()

const participantOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']
let options = 1
const orderHoursOptions = ref([])

const orderTimeBtn = reactive([
  { time: '10:00', available: true },
  { time: '11:00', available: true },
  { time: '12:00', available: true },
  { time: '13:00', available: true },
  { time: '14:00', available: true },
  { time: '15:00', available: true },
  { time: '16:00', available: true },
  { time: '17:00', available: true },
  { time: '18:00', available: true },
  { time: '19:00', available: true },
  { time: '20:00', available: true },
  { time: '21:00', available: true },
  { time: '22:00', available: true }
])

// 收資料的form
const form = reactive({
  u_id: '',
  name,
  phone,
  email,
  orderDate: '',
  orderonDate: '',
  participant,
  time: '',
  hours: 0,
  others: '',
  message: '',
  dialog: false,
  loading: false
})

const rules = {
  email (value) {
    return validator.isEmail(value) || '格式錯誤'
  },
  phone (value) {
    return validator.isMobilePhone(value, 'zh-TW') || '格式錯誤'
  },
  required (value) {
    return !!value || '欄位必填'
  }
}

// 跑編輯表單驗證

const editForm = ref(null)
const editData = reactive({
  name,
  phone,
  email
})

// 點擊過的按鈕變色
const selectTimeBtn = document.querySelectorAll('.orderTimeBtn')
selectTimeBtn.forEach((btn, i) => {
  console.log('btn')
  btn.addEventListener('click', function () {
    btn.classList.add('bg-primary')
  })
})

const onEditBtnClick = async () => {
  editForm.value.validate()
  try {
    if (!editForm.value.validate()) {
      return
    }
    form.name = editData.name
    form.phone = editData.phone
    form.email = editData.email
    form.dialog = false
    $q.notify({
      position: 'top',
      message: '修改成功',
      color: 'secondary',
      avatar: `https://source.boringavatars.com/beam/256/${user.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`
    })
  } catch (error) {
    console.log(error)
  }
}

// 使用者選擇日期後發送請求取得該天預約情況
watch(() => form.orderDate, async (newValue, oldValue) => {
  // console.log('form.orderDate 變更', newValue, oldValue)
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
      return btn
    })

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
  } catch (error) {
    console.log(error)
  }
}, { deep: true })

// onsubmit送出表單
const onSubmit = async () => {
  form.loading = true
  try {
    // form._id 為orders的_id
    await apiAuth.post('/orders', ({
      name: form.name,
      phone: form.phone,
      email: form.email,
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
    router.push('/user/orders')
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

watch(() => form.time, async (newValue, oldValue) => {
  // console.log('form.orderTime 變更', newValue, oldValue)
  try {
    orderHoursOptions.value = []
    options = 1
    const startIdx = orderTimeBtn.findIndex(btn => btn.time === form.time)
    if (startIdx > -1) {
      let i = startIdx
      while (orderTimeBtn[i] && orderTimeBtn[i].available) {
        i++
      }
      for (let e = 1; e <= (i - startIdx); e++) {
        orderHoursOptions.value.push(options)
        options++
      }
      return orderHoursOptions.value
    } else {
      for (let e = 1; e <= 12; e++) {
        orderHoursOptions.value.push(options)
        options++
      }
      return orderHoursOptions.value
    }// 總共 12 個時段，可預約到23點
  } catch (error) {
    console.log(error)
  }
})

form.orderDate = ref(`${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`)
</script>
