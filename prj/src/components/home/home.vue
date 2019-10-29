<template>
  <div id="app">
    <!-- 头部 -->
    <headers></headers>
    <rotation></rotation>
  </div>
</template>
<script>
import headers from "./components/header.vue"
import rotation from './components/rotation.vue'
export default {
  name: "app",
  components: {
    headers,
    rotation
  }
};
</script>