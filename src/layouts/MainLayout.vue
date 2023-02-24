<template>
  <div id="mainLayout">
    <q-layout view="hHh lpR fFf">
      <q-header elevated reveal class=" text-white">
        <q-toolbar class=" text-white shadow-2 rounded-borders flex justify-center items-center">
          <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
          <div class="logoBtn" @click="goHome">
            <img src="@/assets/logo/weblogo-01.svg">
          </div>
          <h4 class="title" @click="goHome">
            桌下吧
          </h4>
          <q-tabs v-model="tab" shrink class="q-mx-auto">
            <q-route-tab name="news" label="最新公告" to="/newsView" />
            <q-route-tab name="boardGameList" label="店內桌遊" to="/boardGameList" />
            <q-route-tab name="shoppingMall" label="二手專區" to="/shoppingMall" />
            <q-route-tab name="Q&A" label="常見Q&A" to="/QA" />
            <q-route-tab name="orders" label="立即預約" to="/orders" />
          </q-tabs>
          <q-btn-dropdown v-if="isLogin && !isAdmin" color="secondary" label="會員專區" class="q-mr-md" icon="mdi-account">
            <q-list>
              <q-item v-close-popup clickable to="/user">
                <q-item-section>
                  <q-item-label>會員資料</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-close-popup clickable to="/user/orders">
                <q-item-section>
                  <q-item-label>我的預約</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-close-popup clickable to="/user/shoppings">
                <q-item-section>
                  <q-item-label>我的訂單</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown v-if="isLogin && isAdmin" color="secondary" label="管理" icon="settings">
            <q-list>
              <q-item v-close-popup clickable to="/admin/users">
                <q-item-section>
                  <q-item-label>會員管理</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-close-popup clickable to="/admin/products">
                <q-item-section>
                  <q-item-label>上架管理</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-close-popup clickable to="/admin/orders">
                <q-item-section>
                  <q-item-label>預約管理</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-close-popup clickable to="/admin/shoppings">
                <q-item-section>
                  <q-item-label>訂單管理</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-close-popup clickable to="/admin/news">
                <q-item-section>
                  <q-item-label>公告管理</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-btn v-if="!isLogin" flat round color="white" icon="account_circle" to="/registerlogin" />
          <q-btn v-if="isLogin & !isAdmin" flat round color="white" icon="shopping_cart" class="icon_cart" to="/cart">
            <q-badge color="red" floating>
              {{ cart }}
            </q-badge>
          </q-btn>
          <q-btn v-if="isLogin" flat round icon="mdi-door-open" size="lg" @click="logout" />
        <!-- <q-input v-model="ph" filled label="Label" placeholder="Placeholder" hint="With placeholder" :dense="dense" /> -->
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from 'src/stores/users'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = useUserStore()
const { isLogin, isAdmin, cart } = storeToRefs(user)
const { logout } = user

const goHome = () => {
  router.push('/')
}
const tab = ref('')
// const ph = ref('')

</script>
