<template>
  <div>
    <haeders></haeders>

    <order></order>

    <est></est>

    <users></users>
  </div>
</template>
<script>
import haeders from "./mytaoku/haeder.vue";
import order from "./mytaoku/myorders.vue";
import est from "./mytaoku/myestate.vue";
import users from "./mytaoku/user.vue";
export default {
  components: {
    haeders,
    order,
    est,
    users
  }
};
</script>
<style lang="less" scoped>
  body{
    background: gray;
  }
</style>