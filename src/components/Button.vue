<script setup>
defineProps({
  className: String,
  active: Boolean,
});
</script>
<template>
  <button
    :class="
      className +
      ' rounded-full text-white font-semibold text-sm py-1.5 px-4 ' +
      `${active ? 'bg-red-600' : 'bg-gray-900'}`
    "
  >
    <slot></slot>
  </button>
</template>
