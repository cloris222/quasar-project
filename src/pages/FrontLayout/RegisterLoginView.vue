<template>
  <q-page>
    <div id="registerlogin">
      <div class="container q-mx-auto ">
        <div class="row justify-center">
          <div class="col-8 col-lg-6">
            <q-card>
              <q-card-section>
                <div class="text-h6 text-center">
                  桌下吧
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
                    @submit="registerValidate"
                    @reset="resetValidation"
                  >
                    <q-input
                      v-model="registerform.name"
                      filled
                      label="請填入姓名 *"
                      lazy-rules
                      :rules="[ rules.required]"
                    />
                    <q-input
                      v-model="registerform.email"
                      filled
                      type="email"
                      label="請填入信箱 *"
                      lazy-rules
                      :rules="[
                        rules.required,rules.email]"
                    />
                    <q-input
                      v-model="registerform.phone"
                      filled
                      type="text"
                      label="請填入手機號碼 *"
                      lazy-rules
                      :rules="[
                        rules.required,rules.phone]"
                    />
                    <q-input
                      v-model="registerform.account"
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
                      v-model="registerform.password"
                      filled
                      type="password"
                      label="請設定密碼 *"
                      hint="密碼請以4~12字元組成"
                      lazy-rules
                      :rules="[
                        rules.required,rules.length
                      ]"
                    />
                    <q-toggle v-model="registerform.accept" label="我已了解店內相關規定並願意遵守" @click="!accept" />
                    <div>
                      <q-btn label="Submit" type="submit" color="primary" />
                      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                    </div>
                  </q-form>
                </q-tab-panel>

                <q-tab-panel name="login">
                  <q-form
                    ref="loginForm"
                    class="q-gutter-md"
                    @submit="loginValidate"
                    @reset="loginReset"
                  >
                    <q-input
                      v-model="loginform.loginaccount"
                      filled
                      label="請輸入帳號 *"
                      hint="帳號以4~12字元組成"
                      lazy-rules
                      :rules="[ rules.length,rules.required]"
                    />

                    <q-input
                      v-model="loginform.loginpassword"
                      filled
                      type="password"
                      label="請輸入密碼 *"
                      hint="密碼以4~12字元組成"
                      lazy-rules
                      :rules="[ rules.length,rules.required]"
                    />
                    <div>
                      <q-btn label="Submit" type="submit" color="primary" />
                      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                    </div>
                  </q-form>
                </q-tab-panel>
              </q-tab-panels>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
import validator from 'validator'
import { api } from '../../boot/axios.js'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useUserStore } from '../../stores/users.js'

const tab = ref('register')
const $q = useQuasar()
const router = useRouter()
const registerform = reactive({
  account: '',
  name: '',
  email: '',
  phone: '',
  password: '',
  accept: false
})

const loginform = reactive({
  loginaccount: '',
  loginpassword: ''
})

const rules = {
  email (value) {
    return validator.isEmail(value) || '格式錯誤'
  },
  phone (value) {
    return validator.isMobilePhone(value, 'zh-TW') || '格式錯誤'
  },
  // return phoneValidate
  // return value === [/^[0-9]{10}$/] || '格式錯誤'
  //   },
  required (value) {
    return !!value || '欄位必填'
  },
  length (value) {
    return (value.length >= 4 && value.length <= 12) || '長度必須為 4 ~ 12 個字'
  }
}

// register

// 設定表單驗證
const registerForm = ref(null)

async function registerValidate () {
  const result = await registerForm.value.validate()
  if (!result) return
  try {
    await api.post('/users', registerform)
    $q.notify({
      position: 'top',
      message: '註冊成功',
      color: 'secondary',
      avatar: `https://source.boringavatars.com/beam/256/${user.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`
    })
    router.push('/')
  } catch (error) {
    $q.notify({
      position: 'top',
      message: error?.response?.data?.message || '發生錯誤',
      color: 'secondary'
    })
  }
}

function resetValidation () {
  registerform.account = ''
  registerform.name = ''
  registerform.email = ''
  registerform.phone = ''
  registerform.password = ''
  registerform.accept = false
}

// login
const loginForm = ref(null)
const user = useUserStore()
const notifyName = ref('')

async function loginValidate () {
  const result = await loginForm.value.validate()
  if (!result) return
  try {
    await user.login(loginform)
    notifyName.value = user.name
    if (user.token.length > 0) {
      $q.notify({
        position: 'top',
        message: `歡迎回來，${notifyName.value}`,
        color: 'secondary',
        avatar: `https://source.boringavatars.com/beam/256/${user.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`
      })
      router.push('/')
    }
  } catch (error) {
    console.log(error)
    $q.notify({
      position: 'top',
      message: error?.response?.data?.message || '發生錯誤',
      color: 'secondary'
    })
  }
}

function loginReset () {
  loginform.loginaccount = ''
  loginform.loginapassword = ''
}

</script>
