<script setup>
const color = useColorMode()

const isDark = computed(() => color.value === 'dark')

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => isDark.value ? '#222222' : '#ffffff',
  }],
})

function toggleDark() {
  color.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="!outline-none"
    type="button"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :aria-pressed="isDark"
    @click="toggleDark"
  >
    <div class="i-carbon-sun dark:i-carbon-moon" />
  </button>
</template>
