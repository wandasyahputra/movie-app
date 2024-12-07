<script setup>
import MovieIcon from "../assets/MoovieTime.svg";
import Shell from "./Shell.vue";
const linkList = [
  {
    name: "Categories",
    link: "/categories",
  },
  {
    name: "Movies",
    link: "/movies",
  },
  {
    name: "TV Shows",
    link: "/tv-show",
  },
  {
    name: "login",
    link: "/login",
  },
];
</script>

<template>
  <div class="w-full py-4 bg-white/10">
    <Shell>
      <div class="w-full flex justify-between">
        <img :src="MovieIcon" class="h-[31px]" />
        <div class="flex flex-row items-center">
          <div
            v-for="item in linkList"
            :key="item.link"
            class="ml-5 cursor-pointer"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </Shell>
  </div>
</template>
