<template>
  <q-page>
    <div id="registerlogin">
      <div class="container q-mx-auto ">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6 text-center">
              桌遊店
            </div>
            <div class="text-subtitle2 text-center">
              桌上遊戲，讓我們拉近人與人的距離
            </div>
          </q-card-section>

          <q-tabs v-model="tab" class="text-teal">
            <q-tab label="註冊" name="register" animated />
            <q-tab label="登入" name="login" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="register">
              <q-form
                ref="registerForm"
                class="q-gutter-md"
                @submit="onSubmit"
                @reset="onReset"
              >
                <q-input
                  v-model="form.registername"
                  filled
                  label="請填入姓名 *"
                  lazy-rules
                  :rules="[ rules.required]"
                />
                <q-input
                  v-model="form.registeremail"
                  filled
                  type="email"
                  label="請填入信箱 *"
                  lazy-rules
                  :rules="[
                    rules.required,rules.email]"
                />
                <q-input
                  v-model="form.registerphone"
                  filled
                  type="text"
                  label="請填入手機號碼 *"
                  lazy-rules
                  :rules="[
                    rules.required,rules.phone]"
                />
                <q-input
                  v-model="form.registeraccount"
                  filled
                  type="text"
                  label="請設定帳號 *"
                  hint="帳號請以4~12字元組成"
                  lazy-rules
                  :rules="[
                    rules.required,rules.length
                  ]"
                />
                <q-input
                  v-model="form.registerpassword"
                  filled
                  type="password"
                  label="請設定密碼 *"
                  hint="密碼請以4~12字元組成"
                  lazy-rules
                  :rules="[
                    rules.required,rules.length
                  ]"
                />
                <q-toggle v-model="form.registeraccept" label="我已了解店內相關規定並願意遵守" @click="!accept" />
                <div>
                  <q-btn label="Submit" type="submit" color="primary" @click="registerValidate" />
                  <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" @click="registerReset" />
                </div>
              </q-form>
            </q-tab-panel>

            <q-tab-panel name="login">
              <q-form
                ref="loginForm"
                class="q-gutter-md"
                @submit="onSubmit"
                @reset="onReset"
              >
                <q-input
                  v-model="form.loginaccount"
                  filled
                  label="請輸入帳號 *"
                  hint="帳號以4~12字元組成"
                  lazy-rules
                  :rules="[ rules.length,rules.required]"
                />

                <q-input
                  v-model="form.loginpassword"
                  filled
                  type="password"
                  label="請輸入密碼 *"
                  hint="密碼以4~12字元組成"
                  lazy-rules
                  :rules="[ rules.length,rules.required]"
                />
                <div>
                  <q-btn label="Submit" type="submit" color="primary" @click="loginValidate" />
                  <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" @click="loginReset" />
                </div>
              </q-form>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
// import validator from '../../boot/validator.js'
import { api } from '../../boot/axios.js'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useUserStore } from '../../stores/users.js'

const tab = ref('register')
const $q = useQuasar()
const router = useRouter()
const form = reactive({
  // register
  registeraccount: '',
  registername: '',
  registeremail: '',
  registerphone: '',
  registerpassword: '',
  registeraccept: false,

  // login
  loginaccount: '',
  loginpassword: ''
})

const rules = reactive({
//   email (value) {
//     return validator.isEmail(value) || '格式錯誤'
//   },
//   phone (value) {
//     return validator.isMobilePhone(value, 'zh-TW') || '格式錯誤'
//   },
  // return phoneValidate
  // return value === [/^[0-9]{10}$/] || '格式錯誤'
  //   },
  required (value) {
    return !!value || '欄位必填'
  },
  length (value) {
    return (value.length >= 4 && value.length <= 12) || '長度必須為 4 ~ 12 個字'
  }
})

// register

// 設定表單驗證
const registerForm = ref(null)

async function registerValidate () {
  const result = await registerForm.value.validate()
  if (!result) return
  try {
    await api.post('/users', form)
    // console.log(api.post)
    $q.notify({
      position: 'top',
      message: '註冊成功'
    })
    router.push('/')
    registerForm.value.submit()
  } catch (error) {
    $q.notify({
      position: 'top',
      message: error?.response?.data?.message || '發生錯誤',
      color: 'primary'
    })
  }
}

function registerReset () {
  // form.registeraccount = '',
  // form.registername = '',
  // form.registeremail = '',
  // form.registerphone = '',
  // form.registerpassword = '',
  // form.registeraccept = false
  registerForm.value.resetValidation()
}

// login
const loginForm = ref(null)
const user = useUserStore()

async function loginValidate () {
  const result = await loginForm.value.validate()
  if (!result) return
  try {
    await user.login(loginForm)
    $q.notify({
      position: 'top',
      message: '歡迎回來',
      color: 'primary'
    })
    router.push('/')
    loginForm.value.submit()
  } catch (error) {
    console.log(error)
    $q.notify({
      position: 'top',
      message: error?.response?.data?.message || '發生錯誤',
      color: 'primary'
    })
  }
}

</script>
