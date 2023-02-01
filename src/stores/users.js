import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { api } from '../boot/axios.js'
import { useQuasar } from 'quasar'

const $q = useQuasar()

export const useUserStore = defineStore('user', () => {
  const tokens = ref('')
  const name = ref('')
  const account = ref('')
  const email = ref('')
  const phone = ref('')
  const cart = ref(0)
  const role = ref(0)
  const favorites = ref(0)

  const isLogin = computed(() => {
    return tokens.value.length > 0
  })

  const isAdmin = computed(() => {
    return role.value === 1
  })

  const avatar = computed(() => {
    return `https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`
  })

  async function login (form) {
    try {
      const { data } = await api.post('/users/login', form)
      tokens.value = data.result.tokens
      name.value = data.result.name
      account.value = data.result.account
      email.value = data.result.email
      phone.value = data.result.phone
      cart.value = data.result.cart
      role.value = data.result.role
      favorites.value = data.result.favorites

      $q.notify({
        message: '登入成功',
        color: 'primary'
      })

      this.router.push('/')
    } catch (error) {
      $q.notify({
        message: error?.response?.data?.message || '發生錯誤',
        color: 'primary'
      })
    }
  }

  return {
    tokens,
    name,
    account,
    email,
    phone,
    cart,
    role,
    favorites,
    isLogin,
    isAdmin,
    avatar,
    login
  }
})
