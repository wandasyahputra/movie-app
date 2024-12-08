<script setup>
import Star from "../assets/Star.svg";
import Button from "./Button.vue";
import NoImageAvailable from "../assets/NoImageAvailable.svg";
const props = defineProps({
  movie: {
    vote_average: String,
    poster_path: String,
    original_title: String,
    release_date: String,
  },
});

const poster = import.meta.env.VITE_MEDIA_URL + props.movie.poster_path;
const release = new Date(props.movie.release_date);
</script>
<template>
  <div class="w-full justify-center flex">
    <div class="w-[220px] h-[383px] relative">
      <span class="absolute top-0 right-0 bg-gray-900 py-1 px-3 font-bold">{{
        movie.vote_average
      }}</span>
      <img
        :src="poster"
        v-if="movie.poster_path"
        class="object-cover w-full h-[330px]"
      />
      <img
        :src="NoImageAvailable"
        v-else
        class="object-cover w-full h-[330px]"
      />
      <div
        class="absolute opacity-0 hover:opacity-100 duration-300 gap-5 top-0 right-0 bg-gray-900 w-full h-[330px] flex justify-center items-center flex-col"
      >
        <div class="flex">
          <img :src="Star" /><span class="ml-1">
            {{ movie.vote_average }}
          </span>
        </div>
        <span>Action</span>
        <router-link :to="'/' + movie.id">
          <Button active>VIEW</Button>
        </router-link>
      </div>
      <div class="flex flex-col">
        <h4 class="text-sm font-bold mt-1 line-clamp-2">
          {{ movie.original_title }}
        </h4>
        <span class="text-xs text-gray-400 font-light">{{
          release.getFullYear()
        }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
