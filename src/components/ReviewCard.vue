<script setup>
import Star from "../assets/Star.svg";
import { monthList } from "../utils/utils";

const props = defineProps({
  review: {
    author: String,
    author_details: {
      rating: Number,
      avatar_path: String,
    },
    content: String,
    updated_at: String,
  },
});
const date = new Date(props.review.updated_at);
const avatar =
  import.meta.env.VITE_AVATAR_URL + props.review.author_details.avatar_path;
</script>
<template>
  <div class="p-6 bg-gray-100 rounded-lg shadow-lg">
    <div class="flex justify-between">
      <div class="flex">
        <img
          class="rounded-full h-[48px] w-[48px] bg-gray-300 inline-block"
          :src="avatar"
          v-if="review.author_details.avatar_path"
        />
        <div
          class="rounded-full h-[48px] w-[48px] bg-gray-300 inline-block"
          v-else
        ></div>
        <div class="inline-flex flex-col ml-2">
          <span class="font-bold">{{ review.author }}</span>
          <span>{{
            `${
              monthList[date.getMonth()]
            } ${date.getDate()}, ${date.getFullYear()}`
          }}</span>
        </div>
      </div>
      <div>
        <div
          class="rounded-lg bg-gray-200 inline-flex items-start px-3 py-1"
          v-if="review.author_details.rating"
        >
          <img :src="Star" class="inline h-[17px] w-[17px]" />
          <span class="inline text-[36px] leading-[36px] font-semibold ml-2">{{
            review.author_details.rating
          }}</span>
        </div>
      </div>
    </div>
    <p class="pt-2 line-clamp-[8]" v-html="review.content"></p>
  </div>
</template>

<style scoped></style>
