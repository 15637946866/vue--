<template>
  <div id="app">
     <navlist></navlist>
    
     <router-view></router-view>
  </div>
</template>

<script>
import navlist from './components/nav.vue'
export default {
  name: 'app',
  components: {
    navlist
  }
}
</script>


<style>
#app {
}
</style>
