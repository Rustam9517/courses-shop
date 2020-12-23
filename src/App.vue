<template>
  <div id="main">
    <header>
      <nav>
        <router-link to="/">
          <div class="header-logo">
            <h3>Courses</h3>
          </div>
        </router-link>
        <div class="nav-routes">
          <router-link to="/">Home</router-link>
          <router-link to="/add">
            <div class="nav-add">
              <p>Добавить</p>
            </div>
          </router-link>
        </div>
      </nav>
    </header>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#main {
  header{
    width: 100%;
    background-color: hotpink;
    nav{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 2rem;
      a{
        text-decoration: none;
        color: white;
      }
      a:hover{
        color: black;
      }
      .nav-routes{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 15%;
        a.router-link-exact-active {
          color: black;
        }
      }
    }
  }
}
</style>
