<template>
  <div class="movies-index">
    <section class="page-section clearfix">
      <div class="container">
        <div class="intro">
          <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/godfather2.jpg" alt="" />
          <div class="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 class="section-heading mb-4">
              <span class="section-heading-lower"><b>Welcome to Rotten Peters!</b></span>
            </h2>
            <p class="mb-3">
              Head over to the search page to rate your favorites or check out what's been rated below!
            </p>
            <div class="intro-button mx-auto">
              <a class="btn btn-primary btn-xl" href="/searches">Search To Rate Movies!</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <h1 style="color: white">Rated Movies</h1>
    <table class="movie-table">
      <tr>
        <th>Movie (Year)</th>
        <th>Directed By</th>
        <th>Runtime</th>
      </tr>
      <div class="ratings-heading" v-for="movie in movies">
        <tr>
          <td >{{ movie.title }} ({{ movie.release_year }})</td>
          <td>{{  movie.director }} </td>
          <td>{{  movie.runtime }} </td>
        </tr>
    </div>
    </table>
  </div>
</template>

<style>
table, th, td {
  border: 1px solid white;

}
  .movie-heading {
    /* display: table-header-group; */
    color: white;
  }

  tr {
    width: 100%;
  }

  .ratings-heading {
    display: table-row-group;
    color: white;
  }


  .movie-table {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    color: white;
  }
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
