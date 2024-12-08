<script setup>
import Star from "../assets/Star.svg";
import NoImageAvailable from "../assets/NoImageAvailable.svg";
const props = defineProps({
  movie: {
    id: String,
    vote_average: String,
    poster_path: String,
    original_title: String,
    release_date: String,
  },
});

const poster = import.meta.env.VITE_MEDIA_URL + props.movie.poster_path;
</script>

<template>
  <div>
    <div class="flex items-center">
      <img
        :src="poster"
        class="object-cover w-[243px] h-[364px]"
        v-if="movie.poster_path"
      />
      <img
        :src="NoImageAvailable"
        class="object-cover w-[243px] h-[364px]"
        v-else
      />
      <div class="bg-black p-3 w-[300px] h-[324px]">
        <div class="flex">
          <img :src="Star" />
          <span class="font-bold ml-2">{{ movie.vote_average }}</span>
        </div>
        <router-link :to="'/' + movie.id"
          ><h3 class="text-[28px] font-medium">
            {{ movie.original_title }}
          </h3></router-link
        >
        <span class="text-xs font-light line-clamp-[10]"
          >When the crew of a space junk collector ship called The Victory
          discovers a humanoid robot named Dorothy that's known to be a weapon
          of mass destruction, they get involved in a risky business deal which
          puts their lives at stake.</span
        >
      </div>
    </div>
  </div>
</template>
