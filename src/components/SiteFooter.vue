<template>
  <footer>
    <div v-for="(image, index) in searchedImages" :key="index" @click="selectImage(image)">
      <img :src="image" alt="Imagem pesquisada" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import useStore from '../store.ts'

const { searchedImages, selectedImage } = useStore()

const selectImage = (image: string) => {
  selectedImage.value = image
}
</script>
<style scoped>
footer {
  height: 10rem;
  background-color: #33333380;
  color: #fff;
  padding: 4px;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
}
div {
  width: 10rem;
  padding: 4px;
  flex-shrink: 0;
  display: inline-flex;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid #fff;
  border-radius: 8px;
}
footer::-webkit-scrollbar {
  width: 6px;
}

footer::-webkit-scrollbar-thumb {
  background: #dad1d1;
  border-radius: 5px;
}

footer::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
