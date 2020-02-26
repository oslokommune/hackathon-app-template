<template>
  <div id="app">
    <Header />

    <router-view class="content"/>

    <Footer />
  </div>
</template>

<script>
import { Header, Footer } from '@tuuturu/vue/page'
export default {
  components: { Header, Footer }
}
</script>

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
  max-width: 36em;
}

html, body, #app {
  height: 100%;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Oslo Sans', Avenir, Helvetica, Arial, sans-serif;
  font-size: 14pt;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1 0 auto;
  width: calc(100% - 8rem);
  margin: 0 auto;
}

.Header {
  margin-bottom: 1em;
}

.Footer {
  margin-top: 4em;
  flex-shrink: 0;
}
</style>

