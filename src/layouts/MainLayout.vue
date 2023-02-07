<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="bg-primary text-white shadow-2 rounded-borders flex justify-center items-center">
        <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
        <q-btn flat round color="white" icon="home" to="/" />
        <q-tabs v-model="tab" shrink class="q-mx-auto">
          <q-tab name="tab2" label="最新公告" />
          <q-tab name="tab3" label="活動訊息" />
          <q-btn-dropdown auto-close stretch flat label="關於我們">
            <q-list>
              <q-item clickable @click="tab = 'movies'">
                <q-item-section>經營理念</q-item-section>
              </q-item>

              <q-item clickable @click="tab = 'photos'">
                <q-item-section>店面資訊</q-item-section>
              </q-item>

              <q-item clickable @click="tab = 'photos'">
                <q-item-section>桌遊清單</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-tab name="tab5" label="消費方式" />
          <q-btn-dropdown auto-close stretch flat label="二手專區">
            <q-list>
              <q-item clickable @click="tab = 'movies'">
                <q-item-section>所有商品</q-item-section>
              </q-item>

              <q-item clickable @click="tab = 'photos'">
                <q-item-section>暢銷遊戲</q-item-section>
              </q-item>

              <q-item clickable @click="tab = 'photos'">
                <q-item-section>最新上架</q-item-section>
              </q-item>

              <q-item clickable @click="tab = 'photos'">
                <q-item-section>撿便宜專區</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-tab name="tab7" label="常見Q&A" />
        </q-tabs>
        <q-btn-dropdown v-if="isLogin" color="secondary" label="會員專區" class="q-mr-md">
          <q-list>
            <q-item v-close-popup clickable @click="onItemClick">
              <q-item-section>
                <q-item-label>會員資料</q-item-label>
              </q-item-section>
            </q-item>

            <q-item v-close-popup clickable @click="onItemClick">
              <q-item-section>
                <q-item-label>預約管理</q-item-label>
              </q-item-section>
            </q-item>

            <q-item v-close-popup clickable @click="onItemClick">
              <q-item-section>
                <q-item-label>活動管理</q-item-label>
              </q-item-section>
            </q-item>

            <q-item v-close-popup clickable @click="onItemClick">
              <q-item-section>
                <q-item-label>訂單管理</q-item-label>
              </q-item-section>
            </q-item>

            <q-item v-close-popup clickable @click="logout">
              <q-item-section>
                <q-item-label>登出</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn-dropdown v-if="isLogin && isAdmin" color="accent" label="管理" icon="settings">
          <q-list>
            <q-item v-close-popup clickable to="/admin" @click="onItemClick">
              <q-item-section>
                <q-item-label>管理員專區</q-item-label>
              </q-item-section>
            </q-item>

            <q-item v-close-popup clickable @click="onItemClick">
              <q-item-section>
                <q-item-label>會員管理</q-item-label>
              </q-item-section>
            </q-item>

            <q-item v-close-popup clickable to="/products">
              <q-item-section>
                <q-item-label>上架管理</q-item-label>
              </q-item-section>
            </q-item>

            <q-item v-close-popup clickable @click="onItemClick">
              <q-item-section>
                <q-item-label>預約管理</q-item-label>
              </q-item-section>
            </q-item>

            <q-item v-close-popup clickable @click="onItemClick">
              <q-item-section>
                <q-item-label>活動管理</q-item-label>
              </q-item-section>
            </q-item>

            <q-item v-close-popup clickable @click="onItemClick">
              <q-item-section>
                <q-item-label>訂單管理</q-item-label>
              </q-item-section>
            </q-item>

            <q-item v-close-popup clickable @click="onItemClick">
              <q-item-section>
                <q-item-label>公告管理</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn v-if="!isLogin" flat round color="white" icon="account_circle" to="/registerlogin" />
        <q-btn v-if="isLogin" flat round color="white" icon="shopping_cart" />
        <!-- <q-input v-model="ph" filled label="Label" placeholder="Placeholder" hint="With placeholder" :dense="dense" /> -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from 'src/stores/users'
import { storeToRefs } from 'pinia'

const user = useUserStore()
const { isLogin, isAdmin } = storeToRefs(user)
const { logout } = user

const tab = ref('')
// const ph = ref('')

</script>
