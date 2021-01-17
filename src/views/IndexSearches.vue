<template>
  <div class="home">
    <h1 style="color:white">{{ message }}</h1>
     
    <div class="container">
      <div class="container">
        <div class="container">
          <div class="container">
            <div class="container">
              <div class="container">
                <div class="container">
                  <div class="form-group col-xs-12 floating-label-form-group controls">
                    <input v-model="movieTitle" type="text" @keyup.enter="searchMovies" class="form-control" placeholder="Movie" id="movie" required data-validation-required-message="Please enter a movie.">
                    <p class="help-block text-danger"></p>
                  </div>
               </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <div id="success"></div>
    <button class="btn btn-primary" id="sendMessageButton" v-on:click="searchMovies">Search Movies</button>
    <br>
    <br>
    <div v-for="movie in movies">
      <img v-bind:src="movie.img_url">
      <h1 style="color:white"> {{ movie.title }} </h1>
      <h3 style="color:white"> Released ({{ movie.release_year }})</h3>
      <router-link v-bind:to="`/movies/${movie.id}`">More details</router-link>
      <p> __________________________________________________ </p>
      
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
      message: "Enter the movie to search!",
      movies: [],
      movieTitle: "",
    };
  },
  created: function () {},
  methods: {
    searchMovies: function (movie) {
      var params = {
        title: this.movieTitle,
      };

      axios
        .post("/api/searches", params)
        .then((response) => {
          this.movies = response.data;
          console.log(this.movies);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>