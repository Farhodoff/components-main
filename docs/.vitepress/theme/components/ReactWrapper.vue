<script setup>
import { onMounted, ref, watch } from 'vue'
import { createRoot } from 'react-dom/client'
import React from 'react'
import * as Components from '../../../../../src/index' // Import all library components

const props = defineProps({
  componentName: {
    type: String,
    required: true
  },
  props: {
    type: Object,
    default: () => ({})
  },
  content: {
    type: String,
    default: ''
  }
})

const container = ref(null)
let root = null

const render = () => {
    if (!container.value) return
    
    // Find component in library exports
    const Component = Components[props.componentName]
    if (!Component) {
        console.error(`Component ${props.componentName} not found`)
        return
    }

    if (!root) {
        root = createRoot(container.value)
    }

    root.render(React.createElement(Component, props.props, props.content))
}

onMounted(() => {
    render()
})

watch(() => [props.componentName, props.props, props.content], render)

</script>

<template>
  <div ref="container"></div>
</template>
