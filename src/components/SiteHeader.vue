<script setup lang="ts">
import { defineEmits } from 'vue'
import SearchInput from './SearchInput.vue'

const emit = defineEmits(['adjust-width', 'adjust-height', 'zoom'])

const onAdjustWidth = () => {
  emit('adjust-width')
}

const onAdjustHeight = () => {
  emit('adjust-height')
}

const onZoom = () => {
  emit('zoom')
}
</script>

<template>
  <header>
    <ul>
      <li class="search-input">
        <SearchInput />
      </li>
      <li><button @click="onAdjustWidth">Ajustar a largura</button></li>
      <li><button @click="onAdjustHeight">Ajustar a altura</button></li>
      <li><button @click="onZoom">Zoom</button></li>
    </ul>
  </header>
</template>
<style scoped>
header {
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
}

input::placeholder {
  color: #767676;
  font-size: 0.88rem;
  font-style: italic;
}
.search-input {
  width: 50%;
}
button {
  padding: 8px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 0.88rem;
  color: #767676;
}
button:hover {
  color: #000000;
  font-weight: bold;
}
</style>
