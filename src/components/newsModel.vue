<template>
  <div id="newsModel">
    <div class="container">
      <div class="row left">
        <div class="left_img">
          <img src="https://picsum.photos/500/500/?random=10">
        </div>
      </div>
      <div class="row right">
        <div class="right_text col-lg-10">
          <div class="text_title">
            {{ title }}
          </div>
          <div class="text_date ">
            {{ date }}
          </div>
        </div>
        <div class="right_btn col-lg-2">
          <q-btn label="所有公告" color="secondary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('這是一個桌遊店的最新公告')
const date = ref('1999/02/24')
</script>
