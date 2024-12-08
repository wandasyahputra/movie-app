<script setup>
import Star from "../assets/Star.svg";
</script>
<template>
  <div class="p-6 bg-gray-100 rounded-lg shadow-lg">
    <div class="flex justify-between">
      <div class="flex">
        <div
          class="rounded-full h-[48px] w-[48px] bg-gray-300 inline-block"
        ></div>
        <div class="inline-flex flex-col">
          <span>Switch.</span>
          <span>December 8, 2020</span>
        </div>
      </div>
      <div class="rounded-lg bg-gray-200 flex items-start p-2">
        <img :src="Star" class="inline h-[17px] w-[17px]" />
        <span class="inline text-[36px] leading[36px] font-semibold ml-2"
          >7.0</span
        >
      </div>
    </div>
    <p class="pt-2">
      It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The
      pieces are there, and there are moments I adore, but it does come across
      as a bit of a mess, even though the action sequences are breathtaking. If
      you're a fan of the original film, you'll be more willing to take the
      ride, but for those more indifferent, it may be a bit of a blander sit. If
      you can and are planning to watch it, the theatrical experience is the way
      to go - there is nothing like seeing these stunning sets, fun action
      scenes and hearing Zimmer's jaw-dropping score like on the big screen. -
      Chris dos Santos... read the rest.
    </p>
  </div>
</template>

<style scoped></style>
