<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Hjem</router-link> |
      <router-link to="/help">Hjelp</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
$osg-font-path: '~styleguide/src/assets/fonts';
@import '~styleguide/src/assets/sass/common';

@import '~@tuuturu/styling/style';

a {
  color: $blue-dark;
  font-family: "Oslo Sans", sans-serif;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 2px solid $blue-dark;
  &:focus, &:hover, &:active, &:visited {
    color: $blue-hover;
    text-decoration: none;
    border-bottom: 2px solid $blue-hover;
  }
}

/*
 * Typografi
 */
h1 {
  font-size: 2em;
  margin-bottom: 0.5em;

  &:not(:first-child) {
    margin-top: 1em
  }
}
h2 {
  font-size: 1.75em;
  margin-bottom: 0.5714em;
  &:not(:first-child) {
    margin-top: 1.1428em
  }
}
h3 {
  font-size: 1.5em;
  margin-bottom: 0.6666em;
  &:not(:first-child) {
    margin-top: 1.3333em
  }
}
p {

}

#app {
  font-family: 'Oslo Sans', Avenir, Helvetica, Arial, sans-serif;
  font-size: 14pt;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
