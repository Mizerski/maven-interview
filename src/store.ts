import { reactive, toRefs } from 'vue'

interface State {
  searchedImages: string[]
  selectedImage: string | null
}

const state: State = reactive({
  searchedImages: [],
  selectedImage: null
})

export default function useStore() {
  return toRefs(state)
}
