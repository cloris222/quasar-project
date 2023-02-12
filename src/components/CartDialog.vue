<template>
  <div id="CartDialog">
    <q-dialog v-model="form.dialog" persistent>
      <q-card class="q-px-md">
        <q-card-section class="row items-center q-pb-md">
          <div class="text-h6">
            購物車
          </div>
          <q-space />
          <q-btn v-close-popup icon="close" flat round dense />
        </q-card-section>

        <q-form
          class="q-gutter-md"
          :style="{width:'500px'}"
          @submit="onSubmit"
        >
          <q-card-section>
            <q-btn label="Submit" type="submit" color="primary" />
          </q-card-section>
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>

defineProps({
  /* eslint-disable */
  _id: {
    type: String,
    default: ''
  },
  /* eslint-enable */
  name: {
    type: String,
    default: ''
  },
  images: {
    type: [String],
    default: ''
  },
  category: {
    type: [String],
    default: ''
  },
  gamer: {
    type: Number,
    default: 0
  },
  age: {
    type: Number,
    default: 0
  },
  rules: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  sell: {
    type: Boolean,
    default: false
  }

})

const 
</script>
