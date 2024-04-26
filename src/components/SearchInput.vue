<template>
  <div>
    <input
      type="text"
      placeholder="Pesquise sua imagem"
      v-model="query"
      @keyup.enter="searchImages"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import useStore from '../store.js'
const { searchedImages } = useStore()
const query = ref('')

const searchImages = () => {
  axios.get(`https://source.unsplash.com/random/?${query.value}`).then((response) => {
    searchedImages.value.unshift(response.request.responseURL)
  })
}
</script>

<style scoped>
input {
  width: 100%;
  padding: 12px;
  border: none;
  background-color: #e7e7e7;
  border-radius: 8px;
}

footer img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
