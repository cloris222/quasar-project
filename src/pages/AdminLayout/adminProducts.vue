<template>
  <q-page id="adminProducts" class="flex justify-center items-center">
    <div class="container">
      <div class="row">
        <div class="col-5 list_area">
          <div class="card" @click="toList">
            <div class="card_content">
              <q-icon name="mdi-cards" :style="{color:hover?'primary':'secondary'}" @mouseover="hover = true" @mouseleave="hover = false" />
              桌遊清單
            </div>
          </div>
        </div>
        <div class="col-5 shopping_area">
          <div class="card" @click="toShoppings">
            <div class="card_content">
              <q-icon name="mdi-bookshelf" :style="{color:hover?'primary':'secondary'}" @mouseover="hover = true" @mouseleave="hover = false" />
              二手商品
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const hover = ref(false)

const toList = () => {
  router.push('/admin/boardGameList')
}

const toShoppings = () => {
  router.push('/admin/products_shoppingMall')
}

</script>
