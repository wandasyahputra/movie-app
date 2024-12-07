<script setup>
import Button from "../components/Button.vue";
import MovieCard from "../components/MovieCard.vue";
import Shell from "../components/Shell.vue";
import Carousel from "../components/Carousel.vue";
</script>

<template>
  <div class="py-10 w-full">
    <Carousel />
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
            <Button active="true">Popularity</Button>
            <Button className="ml-4">Release Date</Button>
          </div>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-5 py-10">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </Shell>
    </div>
  </div>
</template>
