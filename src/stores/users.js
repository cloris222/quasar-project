import { defineStore } from 'pinia'
import { LocalStorage, Notify } from 'quasar'
import { ref, computed } from 'vue'
import { api, apiAuth } from '../boot/axios.js'
import { useRouter } from 'vue-router'

const router = useRouter()

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const name = ref('')
  const account = ref('')
  const email = ref('')
  const phone = ref('')
  const cart = ref(0)
  const role = ref(0)
  const favorites = ref(0)

  const isLogin = computed(() => {
    return token.value.length > 0
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
      token.value = data.result.token
      name.value = data.result.name
      account.value = data.result.account
      email.value = data.result.email
      phone.value = data.result.phone
      cart.value = data.result.cart
      role.value = data.result.role
      favorites.value = data.result.favorites
    } catch (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    try {
      await apiAuth.delete('/users/logout')
      token.value = ''
      account.value = ''
      role.value = 0
      cart.value = 0
      Notify.create({
        position: 'top',
        message: '登出成功',
        color: 'secondary',
        avatar: `https://source.boringavatars.com/beam/256/${account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`

      })
      router.push('/')
    } catch (error) {
      Notify.create({
        position: 'top',
        message: error?.response?.data?.message || '發生錯誤',
        color: 'secondary'
      })
    }
  }

  return {
    token,
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
    login,
    logout
  }
}, {
  persist: {
    storage: {
      getItem: (key) => {
        return LocalStorage.getItem(key)
      },
      setItem: (key, value) => {
        LocalStorage.set(key, value)
      }
    }
  }
})
