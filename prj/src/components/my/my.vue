<template>
  <div>
    <haeders></haeders>

    <order></order>
  </div>
</template>
<script>
import haeders from "./mytaoku/haeder.vue";
import order from "./mytaoku/myorders.vue";
export default {
  components: {
    haeders,
    order
  }
};
</script>