import Vue from 'vue'

const components = {
  'is-button': () => import('/src/components/IsButton.vue'),
  'is-input': () => import('/src/components/IsInput.vue'),
  'is-text': () => import('/src/components/IsText.vue'),
}

Object.entries(components).forEach(([name, component]) => Vue.component(name, component))