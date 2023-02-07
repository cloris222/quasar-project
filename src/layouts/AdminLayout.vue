<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="justify-between">
        <div class="left_area">
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
          <q-btn flat round color="white" icon="home" to="/" />
        </div>
        <div class="right_area">
          <q-btn-dropdown color="secondary" label="會員專區" class="q-mr-md">
            <q-list>
              <q-item v-close-popup clickable>
                <q-item-section>
                  <q-item-label>會員資料</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-close-popup clickable>
                <q-item-section>
                  <q-item-label>預約管理</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-close-popup clickable>
                <q-item-section>
                  <q-item-label>活動管理</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-close-popup clickable>
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
          <q-btn-dropdown color="accent" label="管理" icon="settings">
            <q-list>
              <q-item v-close-popup clickable to="/admin">
                <q-item-section>
                  <q-item-label>管理員專區</q-item-label>
                </q-item-section>
              </q-item>

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

              <q-item v-close-popup clickable to="/admin/events">
                <q-item-section>
                  <q-item-label>活動管理</q-item-label>
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
          <q-item v-ripple clickable to="/admin/users">
            <q-item-section avatar>
              <q-icon name="face" color="primary" />
            </q-item-section>

            <q-item-section>
              會員管理
            </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/admin/products">
            <q-item-section avatar>
              <q-icon name="star" color="primary" />
            </q-item-section>

            <q-item-section>
              上架管理
            </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/admin/orders">
            <q-item-section avatar>
              <q-icon name="event_available" color="primary" />
            </q-item-section>

            <q-item-section>
              預約管理
            </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/admin/events">
            <q-item-section avatar>
              <q-icon name="festival" color="primary" />
            </q-item-section>

            <q-item-section>
              活動管理
            </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/admin/shoppings">
            <q-item-section avatar>
              <q-icon name="list_alt" color="primary" />
            </q-item-section>

            <q-item-section>
              訂單管理
            </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/admin/news">
            <q-item-section avatar>
              <q-icon name="campaign" color="primary" />
            </q-item-section>

            <q-item-section>
              公告管理
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">
            Admin
          </div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
