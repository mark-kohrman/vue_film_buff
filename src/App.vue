<template>
  <div id="app">
    <h1 class="site-heading text-center text-white d-none d-lg-block">
    <span class="site-heading-upper text-primary mb-3">The ONLY movie rating app</span>
    <span class="site-heading-lower"><b>Rotten Peters</b></span>
  </h1>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
    <div class="container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav mx-auto">
           <li class="nav-item px-lg-4">
            <router-link class="nav-link text-uppercase text-expanded" to="/movies">Rated Movies</router-link>
          </li>
          <li class="nav-item px-lg-4">
            <router-link class="nav-link text-uppercase text-expanded" to="/searches">Search</router-link>
          </li>
          <li class="nav-item px-lg-4">
            <router-link class="nav-link text-uppercase text-expanded" to="/about">About</router-link>
          </li>
          <li class="nav-item px-lg-4">
            <router-link class="nav-link text-uppercase text-expanded" to="/signup">Sign Up</router-link>
          </li>
          <li class="nav-item px-lg-4">
            <router-link class="nav-link text-uppercase text-expanded" to="/login">Login</router-link>
          </li>
          <li class="nav-item px-lg-4">
            <router-link class="nav-link text-uppercase text-expanded" to="/logout">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>



 <router-view/>


  <footer class="footer text-faded text-center py-5">
    <div class="container">
      <p class="m-0 small">Copyright &copy; Rotten Peters 2023, An App By Mark Kohrman</p>
    </div>
  </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
