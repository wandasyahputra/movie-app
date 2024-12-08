<script setup>
import Button from "../components/Button.vue";
import MovieCard from "../components/MovieCard.vue";
import Shell from "../components/Shell.vue";
import Carousel from "../components/Carousel.vue";
import { api } from "../utils/api";
</script>
<script>
const movieApi = async (method) => {
  return await api(`/movie/${method}?language=en-US&page=1`);
};

export default {
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
      method: "popular",
    };
  },
  methods: {
    loadMovie() {
      movieApi(this.method).then((res) => {
        this.results = res.results;
      });
    },
    clickMethod(opt) {
      this.method = opt;
      this.loadMovie();
    },
  },
  mounted() {
    this.loadMovie();
  },
};
</script>

<template>
  <div class="py-10 w-full">
    <Carousel :data="results" />
  </div>
  <div class="w-full relative">
    <div class="h-[333px] bg-white/10 w-full absolute"></div>
    <div class="pt-20">
      <Shell>
        <div class="flex justify-between">
          <div
            class="w-[120px] border-t-4 border-red-400 text-nowrap text-[24px] font-bold"
          >
            Discover Movies
          </div>
          <div>
            <Button
              :active="method === 'popular'"
              @click="clickMethod('popular')"
              >Popularity</Button
            >
            <Button
              :active="method === 'now_playing'"
              @click="clickMethod('now_playing')"
              className="ml-4"
              >Release Date</Button
            >
          </div>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-5 py-10">
          <MovieCard
            v-for="popular in results.slice(0, 10)"
            :key="popular.id"
            :movie="popular"
          />
        </div>
      </Shell>
    </div>
  </div>
</template>
