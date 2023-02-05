import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'
import { ref, computed } from 'vue'
import { api } from '../boot/axios.js'

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
      tokens.value = data.result.token
      name.value = data.result.name
      account.value = data.result.account
      email.value = data.result.email
      phone.value = data.result.phone
      cart.value = data.result.cart
      role.value = data.result.role
      favorites.value = data.result.favorites

      this.router.push('/')
    } catch (error) {
      console.log(error)
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
