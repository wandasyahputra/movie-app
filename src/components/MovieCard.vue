<script setup>
import Star from "../assets/Star.svg";
import Button from "./Button.vue";
</script>
<template>
  <div class="w-full justify-center flex">
    <div class="w-[220px] h-[383px] relative">
      <span class="absolute top-0 right-0 bg-gray-900 py-1 px-3 font-bold"
        >7.0</span
      >
      <img
        src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-clown-room-800x525.jpg"
        class="object-cover w-full h-[330px]"
      />
      <div
        class="absolute opacity-0 hover:opacity-100 duration-300 gap-5 top-0 right-0 bg-gray-900 w-full h-[330px] flex justify-center items-center flex-col"
      >
        <div class="flex">
          <img :src="Star" /><span class="ml-1"> 7.0 </span>
        </div>
        <span>Action</span>
        <Button active>VIEW</Button>
      </div>
      <div class="flex flex-col">
        <h4 class="text-sm font-bold mt-1 line-clamp-2">Wonder Women</h4>
        <span class="text-xs text-gray-400 font-light">2020</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
