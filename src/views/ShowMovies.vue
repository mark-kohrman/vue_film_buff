<template>
  <div class="movies-show">
    <img v-bind:src="movie.img_url">
    <h1>{{ movie.title}}</h1>
    <h2> Directed by {{ movie.director}}</h2>
    <h2> Released ({{ movie.release_year }})</h2>
    <h3>  {{ movie.runtime }} runtime</h3>
    <p> Plot: {{ movie.description }}</p>
    <h2><button v-on:click="thumbsUp()">Thumbs Up:</button> {{ movie.thumbs_up }}</h2>
    <h2><button v-on:click="thumbsDown()">Thumbs Down:</button> {{ movie.thumbs_down }}</h2>





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
    thumbsUp: function () {
      this.upVote = this.movie.thumbs_up + 1;
      axios.patch("/api/movies/" + this.$route.params.id + "?thumb=up").then((response) => {
        this.movie.thumbs_up = response.data["thumbs_up"];
      });
    },
    thumbsDown: function () {
      this.downVote = this.movie.thumbs_down + 1;
      axios.patch("/api/movies/" + this.$route.params.id + "?thumb=down").then((response) => {
        this.movie.thumbs_down = response.data["thumbs_down"];
      });
    },
  },
};
</script>