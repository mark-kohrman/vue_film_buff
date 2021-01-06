<template>
  <div class="movies-show">
    <img v-bind:src="movie.img_url">
    <h1>{{ movie.title}}</h1>
    <h2> Directed by {{ movie.director}}</h2>
    <h2> Released ({{ movie.release_year }})</h2>
    <h3>  {{ movie.runtime }} runtime</h3>
    <p> Plot: {{ movie.description }}</p>
    <h3> Thumbs Up: {{ movie.thumbs_up }} </h3>
    <h3> Thumbs Down: {{ movie.thumbs_down }} </h3>




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
      movie: [],
      upVote: [],
      downVote: [],
    };
  },
  created: function () {
    this.movieSearch();
  },
  methods: {
    movieSearch: function () {
      axios.get("/api/searches/" + this.$route.params.id).then((response) => {
        console.log("movie data from searches please!!");
        this.movie = response.data;
      });
    },
  },
};
</script>