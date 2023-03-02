<template>
  <div id="userHome">
    <div class="container">
      <div class="row title_area">
        <div class="bigTitle">
          會員資料
        </div>
      </div>
      <div class="user_info">
        <div class="row info_area">
          <div class="col-12">
            <q-card>
              <!-- 名字+帳號 -->
              <div class="top_area">
                <q-card-section>
                  <div class="user_name">
                    {{ form.name }}
                  </div>
                  <div class="user_account">
                    {{ form.account }}
                  </div>
                </q-card-section>
              </div>

              <div class="bottom_area">
                <!-- 信箱+電話 -->
                <q-card-section>
                  <div class="user_email">
                    信箱：{{ form.email }}
                  </div>
                  <div class="user_phone">
                    電話：{{ form.phone }}
                  </div>
                </q-card-section>
              </div>
            </q-card>
          </div>
        </div>
        <div class="column avatar_area">
          <div class="user_avatar">
            <img :src="user.avatar">
          </div>

          <q-btn icon="edit" label="編輯資料" color="secondary" @click="form.dialog = true" />

          <q-dialog v-model="form.dialog" persistent>
            <q-card class="q-px-md">
              <q-card-section class="row items-center q-pb-md">
                <div class="text-h6">
                  編輯資料
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
                  label="請輸入姓名"
                  lazy-rules
                  :rules="[ rules.required]"
                />

                <q-input
                  v-model="form.account"
                  type="text"
                  outlined
                  label="請輸入帳號"
                  lazy-rules
                  :rules="[ rules.required,rules.length]"
                />

                <q-input
                  v-model="form.email"
                  type="text"
                  outlined
                  label="請輸入信箱"
                  lazy-rules
                  :rules="[rules.required,rules.email]"
                />

                <q-input
                  v-model="form.phone"
                  type="text"
                  outlined
                  label="請輸入電話"
                  lazy-rules
                  :rules="[rules.required,rules.phone]"
                />
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
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/users'
import { apiAuth } from '@/boot/axios.js'
import validator from 'validator'
import { reactive } from 'vue'
import { useQuasar } from 'quasar'

const user = useUserStore()
const $q = useQuasar()

const rules = {
  email (value) {
    return validator.isEmail(value) || '格式錯誤'
  },
  phone (value) {
    return validator.isMobilePhone(value, 'zh-TW') || '格式錯誤'
  },
  required (value) {
    return !!value || '欄位必填'
  },
  length (value) {
    return (value.length >= 4 && value.length <= 12) || '長度必須為 4 ~ 12 個字'
  }
}

const form = reactive({
  name: user.name,
  account: user.account,
  email: user.email,
  phone: user.phone,
  dialog: false,
  loading: false
})

// 修改會員資料
const onSubmit = async () => {
  try {
    form.loading = true
    const { data } = await apiAuth.patch('/users/' + user._id, form)
    user.name = data.result.name
    user.account = data.result.account
    user.email = data.result.email
    user.phone = data.result.phone
    $q.notify({
      position: 'top',
      message: '編輯成功',
      color: 'secondary',
      avatar: `https://source.boringavatars.com/beam/256/${user.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`
    })
  } catch (error) {
    console.log(error)
    $q.notify({
      position: 'top',
      message: error?.response?.data?.message || '發生錯誤',
      color: 'negative'
    })
  }
  form.dialog = false
  form.loading = false
}
</script>
