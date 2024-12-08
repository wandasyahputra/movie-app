<script setup>
import Star from "../assets/Star.svg";
import Shell from "../components/Shell.vue";
import ReviewCard from "../components/ReviewCard.vue";
import MovieCard from "../components/MovieCard.vue";
</script>

<template>
  <div class="w-full -mt-[63px] -z-[1] relative">
    <img
      src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-clown-room-800x525.jpg"
      class="h-[470px] w-full object-cover"
    />
    <div class="absolute w-full h-full top-0 left-0 bg-black/40"></div>
    <div class="absolute w-full h-[80px] bg-black/40 bottom-0">
      <Shell>
        <div class="flex items-center h-[80px]">
          <img
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-clown-room-800x525.jpg"
            class="w-[220px] h-[330px] object-cover shadow-xl"
          />
          <div class="p-5 h-[330px]">
            <div class="h-[105px]">
              <span>2020</span>
              <h2 class="text-[36px] font-semibold leading-[33px]">
                Wonder Women 1984
              </h2>
              <span class="text-xs">Fantasy, Action, Adventure</span>
            </div>
            <div class="flex items-center h-[80px]">
              <img :src="Star" class="w-[32px] h-[32px]" />
              <span class="text-[36px] font-semibold ml-2"> 7.0 </span>
              <div class="flex flex-col border-r border-gray-600 text-xs px-5">
                <span class="text-white/50">USER SCORE</span>
                <span>3261 VOTES</span>
              </div>
              <div class="flex flex-col border-r border-gray-600 text-xs px-5">
                <span class="text-white/50">Status</span>
                <span>Released</span>
              </div>
              <div class="flex flex-col border-r border-gray-600 text-xs px-5">
                <span class="text-white/50">Language</span>
                <span>English</span>
              </div>
              <div class="flex flex-col border-r border-gray-600 text-xs px-5">
                <span class="text-white/50">Budget</span>
                <span>$200.000.000.000,00</span>
              </div>
              <div class="flex flex-col text-xs px-5">
                <span class="text-white/50">Production</span>
                <span>DC ENTERTAINMENT</span>
              </div>
            </div>
            <div class="h-[125px] py-3">
              <span class="text-red-500 font-semibold">Overview</span>
              <p class="text-black text-sm w-[60%]">
                Wonder Woman comes into conflict with the Soviet Union during
                the Cold War in the 1980s and finds a formidable foe by the name
                of the Cheetah.
              </p>
            </div>
          </div>
        </div>
      </Shell>
    </div>
  </div>
  <div class="pt-[150px] bg-white w-full text-black z-[-2]">
    <Shell>
      <span class="text-red-500 font-semibold">Review</span>
      <div class="grid grid-cols-2 gap-10 py-4">
        <review-card></review-card>
        <review-card></review-card>
      </div>
    </Shell>
  </div>
  <div class="py-10">
    <Shell>
      <h4 class="my-8">RECOMMENDATION MOVIES</h4>
      <div class="grid grid-cols-5 gap-5">
        <movie-card></movie-card>
        <movie-card></movie-card>
        <movie-card></movie-card>
        <movie-card></movie-card>
        <movie-card></movie-card>
      </div>
    </Shell>
  </div>
</template>
