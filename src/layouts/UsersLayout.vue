<template>
  <div id="adminLayout">
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-primary text-white">
        <q-toolbar class="justify-between">
          <div class="left_area">
            <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
            <q-btn flat round color="white" icon="home" to="/" size="lg" />
          </div>
          <div class="right_area">
            <q-btn flat round icon="mdi-door-open" size="lg" @click="logout" />
          </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="350"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item v-ripple clickable to="/users">
              <q-item-section avatar>
                <q-icon name="face" color="secondary" />
              </q-item-section>
              <q-item-section>
                會員資料
              </q-item-section>
            </q-item>

            <q-item v-ripple clickable to="/users/orders">
              <q-item-section avatar>
                <q-icon name="star" color="secondary" />
              </q-item-section>

              <q-item-section>
                我的預約
              </q-item-section>
            </q-item>

            <q-item v-ripple clickable to="/users/shoppings">
              <q-item-section avatar>
                <q-icon name="event_available" color="secondary" />
              </q-item-section>

              <q-item-section>
                我的訂單
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img :src="avatar">
            </q-avatar>
            <div class="text-weight-bold">
              {{ user.name }}
              <br>
              {{ user.account }}
            </div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer elevated class="bg-primary text-white">
        <div class="copyright">
          Copyright © 2023 Yung Chien Yang. All rights reserved.
        </div>
      </q-footer>
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from 'src/stores/users'

const user = useUserStore()
const { logout, avatar } = user

const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>

<!-- <style lang="scss" scoped>

.bg-primary{
        color: #fff;
    }

</style> -->
