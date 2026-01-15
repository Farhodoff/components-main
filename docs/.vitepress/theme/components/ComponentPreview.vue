<script setup>
import { defineProps, onMounted, ref } from 'vue'
import { createRoot } from 'react-dom/client'
import React from 'react'

const props = defineProps({
  component: {
    type: Object,
    required: true
  },
  code: {
    type: String,
    required: false
  }
})

const container = ref(null)

onMounted(() => {
  if (container.value) {
    const root = createRoot(container.value)
    root.render(React.createElement(props.component))
  }
})
</script>

<template>
  <div class="component-preview">
    <div class="preview-container" ref="container"></div>
    <div v-if="code" class="code-container">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.component-preview {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1rem 0;
  overflow: hidden;
}

.preview-container {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--vp-c-bg-soft);
  min-height: 150px;
}

.code-container {
  border-top: 1px solid var(--vp-c-divider);
}
</style>
