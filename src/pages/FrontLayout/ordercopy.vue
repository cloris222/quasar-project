<template>
  <q-form
    class="q-gutter-md"
    @submit="onSubmit"
  >
    <q-card>
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

      <!-- 選擇預約時段 -->
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
    </q-card>

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
</template>
