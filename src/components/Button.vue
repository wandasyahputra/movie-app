<script setup>
defineProps({
  className: String,
  active: String,
});
</script>
<template>
  <button
    :class="
      className +
      ' rounded-full text-white font-semibold text-sm py-2 px-4 ' +
      `${active === 'true' ? 'bg-red-600' : 'bg-gray-900'}`
    "
  >
    <slot></slot>
  </button>
</template>
