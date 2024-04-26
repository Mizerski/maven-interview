<script setup lang="ts">
import { ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import useStore from './store.js'

const { selectedImage } = useStore()
const imageRef = ref(null)
const isWidthAdjusted = ref(false)
const isHeightAdjusted = ref(false)
const isZoomed = ref(false)

const adjustWidth = () => {
  if (imageRef.value) {
    if (isWidthAdjusted.value) {
      imageRef.value.style.width = '50%'
    } else {
      imageRef.value.style.width = '100%'
    }
    isWidthAdjusted.value = !isWidthAdjusted.value
    if (isZoomed.value) {
      imageRef.value.style.transform = 'scale(1)'
      isZoomed.value = false
    }
  }
}

const adjustHeight = () => {
  if (imageRef.value) {
    if (isHeightAdjusted.value) {
      imageRef.value.style.height = '50%'
    } else {
      imageRef.value.style.height = '100%'
    }
    isHeightAdjusted.value = !isHeightAdjusted.value
    if (isZoomed.value) {
      imageRef.value.style.transform = 'scale(1)'
      isZoomed.value = false
    }
  }
}

const zoomImage = () => {
  if (imageRef.value) {
    if (isZoomed.value) {
      imageRef.value.style.transform = 'scale(1)'
    } else {
      imageRef.value.style.transform = 'scale(2)'
    }
    isZoomed.value = !isZoomed.value
  }
}

const resetImage = () => {
  if (imageRef.value) {
    imageRef.value.style.width = '50%'
    imageRef.value.style.height = '50%'
    imageRef.value.style.transform = 'scale(1)'
    isWidthAdjusted.value = false
    isHeightAdjusted.value = false
    isZoomed.value = false
  }
}
</script>

<template>
  <header>
    <SiteHeader @adjust-width="adjustWidth" @adjust-height="adjustHeight" @zoom="zoomImage" />
  </header>

  <main>
    <div class="image-container">
      <img
        v-if="selectedImage"
        :src="selectedImage"
        alt="Imagem selecionada"
        ref="imageRef"
        @click="resetImage"
      />
    </div>
  </main>

  <footer>
    <SiteFooter />
  </footer>
</template>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
}

.image-container img {
  width: 50%;
  height: 50%;
}
</style>
