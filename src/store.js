import { reactive, toRefs } from 'vue';

const state = reactive({
    searchedImages: [],
    selectedImage: null,

});

export default function useStore() {
    return toRefs(state);
}