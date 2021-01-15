<template>
  <div class="movies-index">
  <section class="page-section clearfix">
    <div class="container">
      <div class="intro">
        <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/godfather.jpg" alt="">
        <div class="intro-text left-0 text-center bg-faded p-5 rounded">
          <h2 class="section-heading mb-4">
            <span class="section-heading-lower"><b>Welcome to Film Buff!</b></span>
          </h2>
          <p class="mb-3">Head over to the search page to rate your favorites or check out what's been rated below!
          </p>
          <div class="intro-button mx-auto">
            <a class="btn btn-primary btn-xl" href="/searches">Search To Like Movies!</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <h1 style="color:white"> Rated Movies </h1>

    <div v-for="movie in movies">
      <img v-bind:src="movie.img_url">
      <h1 style="color:white">{{ movie.title}}</h1>
      <h2 style="color:white"> Directed by {{ movie.director}}</h2>
      <h2 style="color:white"> Released ({{ movie.release_year }})</h2>
      <h3 style="color:white">  {{ movie.runtime }} runtime</h3>
      <p style="color:white"> Plot: {{ movie.description }} </p>
      <h3 style="color:white"> Thumbs Up: {{ movie.thumbs_up }} </h3>
      <h3 style="color:white"> Thumbs Down: {{ movie.thumbs_down }} </h3>
      <p style="color:white"> ________________________________ </p>
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