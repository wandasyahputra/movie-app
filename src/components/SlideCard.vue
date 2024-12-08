<script setup>
import Star from "../assets/Star.svg";
</script>

<template>
  <div>
    <div class="flex items-center">
      <img
        src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-clown-room-800x525.jpg"
        class="object-cover w-[243px] h-[364px]"
      />
      <div class="bg-black p-3 w-[300px] h-[324px]">
        <div class="flex">
          <img :src="Star" />
          <span class="font-bold ml-2"> 7.3 </span>
        </div>
        <h3 class="text-[28px] font-medium">Space sweepers</h3>
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
