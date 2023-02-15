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
        @reset="onReset"
      >
        <!-- 選擇人數 日期 -->
        <div class="row">
          <div class="col-4">
            <q-select v-model="participant" outlined :options="participantOptions" label="請選擇人數" />
          </div>
          <div class="col-4">
            <q-input v-model="orderDate" outlined mask="date" :rules="['date']">
              <template #append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="orderDate">
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

              <!-- 中午 -->
              <q-card-section>
                <q-btn label="13:00" />
                <q-btn label="13:30" />
              </q-card-section>
              <!-- 下午 -->
              <q-card-section>
                <q-btn label="14:00" />
                <q-btn label="14:30" />
                <q-btn label="15:00" />
                <q-btn label="15:30" />
                <q-btn label="16:00" />
                <q-btn label="16:30" />
              </q-card-section>
              <!-- 晚上 -->
              <q-card-section>
                <q-btn label="17:00" />
                <q-btn label="17:30" />
                <q-btn label="18:00" />
                <q-btn label="18:30" />
                <q-btn label="19:00" />
                <q-btn label="19:30" />
              </q-card-section>
              <q-card-section>
                如有訂位以外的需求，請撥打電話與我們聯繫
                0223941157
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- 確認資訊 -->
        <q-card>
          <q-card-section>
            您已選擇預約 桌下吧泰山店
          </q-card-section>
        </q-card>

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
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
                  台北市萬華區漢中街205號3樓
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
import { ref } from 'vue'

const participant = ref(2)
const today = new Date()
console.log(today)

const participantOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']
const orderDate = ref(today.toLocaleDateString())

</script>
