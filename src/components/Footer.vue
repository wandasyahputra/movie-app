<script setup>
import MovieIconGrey from "../assets/MoovieTime-Grey.svg";
import Shell from "./Shell.vue";
</script>

<template>
  <div class="w-full py-4 bg-gray-900">
    <Shell>
      <div class="w-full flex justify-between text-[13px] text-gray-600 py-6">
        <span> © 2021 MoovieTime. All rights reserved. </span>
        <img :src="MovieIconGrey" class="h-[31px]" />
        <span>Made with Vue JS</span>
      </div>
    </Shell>
  </div>
</template>
