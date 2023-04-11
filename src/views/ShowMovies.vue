<template>
  <div v-if="movie" class="movies-show">
    <img v-bind:src="movie.img_url">
    <h1 style="color:white">{{ movie.title}}</h1>
    <h2 style="color:white"> Directed by {{ movie.director}}</h2>
    <h2 style="color:white"> Released ({{ movie.release_year }})</h2>
    <p style="color:white"> Plot: {{ movie.description }}</p>
      <div class="container">
        <h2 style="color:white"> Rate </h2>
        <select id="rating-options">
           <option selected disabled style="color:red">Ratings</option>
            <option value='5'>5</option>
            <option value='4.9'>4.9</option>
            <option value='4.8'>4.8</option>
            <option value='4.7'>4.7</option>
            <option value='4.6'>4.6</option>
            <option value='4.5'>4.5</option>
            <option value='4.4'>4.4</option>
            <option value='4.3'>4.3</option>
            <option value='4.2'>4.2</option>
            <option value='4.1'>4.1</option>
            <option value='4'>4</option>
            <option value='3.9'>3.9</option>
            <option value='3.8'>3.8</option>
            <option value='3.7'>3.7</option>
            <option value='3.6'>3.6</option>
            <option value='3.5'>3.5</option>
            <option value='3.4'>3.4</option>
            <option value='3.3'>3.3</option>
            <option value='3.2'>3.2</option>
            <option value='3.1'>3.1</option>
            <option value='3'>3</option>
            <option value='2.9'>2.9</option>
            <option value='2.8'>2.8</option>
            <option value='2.7'>2.7</option>
            <option value='2.6'>2.6</option>
            <option value='2.5'>2.9</option>
            <option value='2.4'>2.4</option>
            <option value='2.3'>2.3</option>
            <option value='2.2'>2.2</option>
            <option value='2.1'>2.1</option>
            <option value='2'>2</option>
            <option value='1.9'>1.9</option>
            <option value='1.8'>1.8</option>
            <option value='1.7'>1.7</option>
            <option value='1.6'>1.6</option>
            <option value='1.5'>1.5</option>
            <option value='1.4'>1.4</option>
            <option value='1.3'>1.3</option>
            <option value='1.2'>1.2</option>
            <option value='1.1'>1.1</option>
            <option value='1'>1</option>
            <option value='0.9'>0.9</option>
            <option value='0.8'>0.8</option>
            <option value='0.7'>0.7</option>
            <option value='0.6'>0.6</option>
            <option value='0.5'>0.5</option>
            <option value='0.4'>0.4</option>
            <option value='0.3'>0.3</option>
            <option value='0.2'>0.2</option>
            <option value='0.1'>0.1</option>
            <option value='0'>0</option>
        </select>
      </div>
      <br>
   

      <div class="save">
         <button v-on:click="rateMovie()" class="save-rating">Save</button>
      </div>
      <br>
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
      movie: null,
      rating: []
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
        console.log(this.movie);
      });
    },
    rateMovie: function () {
      let ratingOptions = document.getElementById("rating-options");
      let selectedRating = ratingOptions.value;
      // let text = ratingOptions.options[ratingOptions.selectedIndex].text;
      console.log(ratingOptions);
      console.log(selectedRating);

      this.movie.rating = selectedRating;
      this.rating = this.movie.rating;
      console.log('Rated movie a ' + this.rating);
           console.log(this.movie); 
           console.log(this.movie.rating)
      axios.patch("/api/movies/" + this.$route.params.id + "?rating=" + this.rating).then((response) => {
        console.log(response);
        this.movie.rating = response.data["rating"];
        console.log(this.movie.rating);
      });
    }
  },
};
</script>