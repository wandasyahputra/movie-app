<script setup>
import Star from "../assets/Star.svg";
import Shell from "../components/Shell.vue";
import ReviewCard from "../components/ReviewCard.vue";
import MovieCard from "../components/MovieCard.vue";
import NoImageAvailable from "../assets/NoImageAvailable.svg";
import { api } from "../utils/api";
</script>
<script>
const movieDetail = async (id) => {
  return await api(`/movie/${id}`);
};
const movieReview = async (id) => {
  return await api(`/movie/${id}/reviews`);
};
const movieCollection = async (collectionId) => {
  return await api(`/collection/${collectionId}`);
};

export default {
  data() {
    return {
      results: {},
      reviews: [],
      collections: [],
      isLoading: false,
      error: null,
      poster: import.meta.env.VITE_MEDIA_URL,
      backdrop: import.meta.env.VITE_MEDIA_BACKDROP_URL,
    };
  },
  methods: {
    loadMovie() {
      const id = this.$route.params.movieId;
      movieDetail(id).then((res) => {
        this.results = res;
      });
    },
    loadReview() {
      const id = this.$route.params.movieId;
      movieReview(id).then((res) => {
        this.reviews = res.results;
      });
    },
    loadCollection(collectionId) {
      movieCollection(collectionId).then((res) => {
        this.collections = res.parts;
      });
    },
  },
  computed: {
    id() {
      return this.$route.params.movieId;
    },
  },
  watch: {
    results(data) {
      if (data.belongs_to_collection?.id) {
        this.loadCollection(data.belongs_to_collection?.id);
      }
    },
    $route() {
      this.loadMovie();
      this.loadReview();
    },
  },
  mounted() {
    this.loadMovie();
    this.loadReview();
  },
};
</script>

<template>
  <div class="w-full -mt-[63px] -z-[1] relative">
    <img
      :src="backdrop + results.backdrop_path"
      class="h-[470px] w-full object-cover"
      v-if="results.backdrop_path"
    />
    <img :src="NoImageAvailable" class="h-[470px] w-full object-cover" v-else />
    <div class="absolute w-full h-full top-0 left-0 bg-black/40"></div>
    <div class="absolute w-full h-[80px] bg-black/40 bottom-0">
      <Shell>
        <div class="flex items-center h-[80px]">
          <img
            :src="poster + results.poster_path"
            class="w-[220px] h-[330px] object-cover shadow-xl"
            v-if="results.poster_path"
          />
          <img
            :src="NoImageAvailable"
            class="w-[220px] h-[330px] object-cover shadow-xl"
            v-else
          />
          <div class="p-5 h-[330px]">
            <div class="h-[105px]">
              <span>{{ new Date(results?.release_date)?.getFullYear() }}</span>
              <h2 class="text-[36px] font-semibold leading-[33px]">
                {{ results.original_title }}
              </h2>
              <span class="text-xs">{{
                results?.genres?.map((item) => item.name).join(", ")
              }}</span>
            </div>
            <div class="flex items-center h-[80px]">
              <img :src="Star" class="w-[32px] h-[32px]" />
              <span class="text-[36px] font-semibold ml-2">{{
                results.vote_average
              }}</span>
              <div class="flex flex-col border-r border-gray-600 text-xs px-5">
                <span class="text-white/50">USER SCORE</span>
                <span>{{ results.vote_count }} VOTES</span>
              </div>
              <div class="flex flex-col border-r border-gray-600 text-xs px-5">
                <span class="text-white/50">Status</span>
                <span>{{ results.status }}</span>
              </div>
              <div class="flex flex-col border-r border-gray-600 text-xs px-5">
                <span class="text-white/50">Language</span>
                <span>{{ results?.spoken_languages?.[0]?.english_name }}</span>
              </div>
              <div class="flex flex-col border-r border-gray-600 text-xs px-5">
                <span class="text-white/50">Budget</span>
                <span>{{
                  (results?.budget || 0).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                }}</span>
              </div>
              <div class="flex flex-col text-xs px-5">
                <span class="text-white/50">Production</span>
                <span>{{ results?.production_companies?.[0]?.name }}</span>
              </div>
            </div>
            <div class="h-[125px] py-3">
              <span class="text-red-500 font-semibold">Overview</span>
              <p class="text-black text-sm w-[60%] line-clamp-4">
                {{ results?.overview }}
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
      <div class="grid grid-cols-2 gap-10 py-4" v-if="reviews.length">
        <review-card
          v-for="review in reviews.slice(0, 4)"
          :key="review.id"
          :review="review"
        ></review-card>
      </div>
      <div v-else class="grid grid-cols-2 gap-10 py-4">
        No Reviews available
      </div>
    </Shell>
  </div>
  <div class="py-10">
    <Shell v-if="collections.length">
      <h4 class="my-8">RECOMMENDATION MOVIES</h4>
      <div class="grid grid-cols-5 gap-5">
        <movie-card
          v-for="movie in collections.slice(0, 10)"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </Shell>
  </div>
</template>
