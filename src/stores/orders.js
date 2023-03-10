import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { Notify } from 'quasar'
import { apiAuth } from '@/boot/axios.js'
import { useUserStore } from '@/stores/users.js'

export const useOrdersStore = defineStore('orders', () => {
  const ordersData = reactive([])
  const user = useUserStore()

  const editOrders = async (form) => {
    if (user.token.length === 0) {
      Notify.create({
        position: 'top',
        message: '請先登入',
        color: 'negative',
        avatar: `https://source.boringavatars.com/beam/256/${user.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`

      })
      this.router.push('/login')
      return
    }
    try {
      // form._id 為orders的_id
      if (form._id === '') {
        console.log(form)
        const { data } = await apiAuth.post('/orders', ({
          orderDate: form.orderDate,
          orderonDate: form.orderonDate,
          participant: form.participant,
          time: form.time,
          hours: form.hours,
          others: form.others,
          message: '預約成功'
        }))
        ordersData.push(...data.result)
        Notify.create({
          position: 'top',
          message: form.message,
          color: 'secondary',
          avatar: `https://source.boringavatars.com/beam/256/${user.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`
        })
      }
    } catch (error) {
      Notify.create({
        position: 'top',
        message: error?.response?.data?.message || '操作失敗',
        color: 'secondary'
      })
    }
  }

  return {
    ordersData,
    editOrders
  }
})
