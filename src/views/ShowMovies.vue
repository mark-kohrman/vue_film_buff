<template>
  <div class="movies-show">
    <img v-bind:src="movie.img_url">
    <h1>{{ movie.title}}</h1>
    <h2> Director: {{ movie.director}}</h2>
    <h2> Year: {{ movie.release_year }}</h2>
    <p>{{ movie.description }}</p>



  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "This is the show page!!!",
      movie: {},
    };
  },
  created: function () {
    axios.get("/api/movies/6").then((response) => {
      console.log("show me the movies", response);
      this.movie = response.data;
    });
  },
  methods: {},
};
</script>