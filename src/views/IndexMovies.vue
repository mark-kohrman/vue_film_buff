<template>
  <div class="movies-index">
  <div v-for="movie in movies">
    <img v-bind:src="movie.img_url">
    <h1>{{ movie.title}}</h1>
    <h2> Directed by {{ movie.director}}</h2>
    <h2> Released ({{ movie.release_year }})</h2>
    <h3>  {{ movie.runtime }} runtime</h3>
    <p> Plot: {{ movie.description }}</p>
    <h3> Thumbs Up: {{ movie.thumbs_up }} </h3>
    <h3> Thumbs Down: {{ movie.thumbs_down }} </h3>
    <p> ________________________________ </p>
    <br>

  </div>




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
      movies: {},
    };
  },
  created: function () {
    console.log(this.$route);
    axios.get("/api/movies").then((response) => {
      console.log("show me ALL the movies", response);
      console.log(this.$route);
      this.movies = response.data;
    });
  },
  methods: {},
};
</script>