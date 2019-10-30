<template>
  <div class="aaa">
    <haeders></haeders>

    <order></order>

    <est></est>

    <users></users>


    <user2s></user2s>


    <user3s></user3s>
  </div>
</template>
<script>
import haeders from "./mytaoku/haeder.vue";
import order from "./mytaoku/myorders.vue";
import est from "./mytaoku/myestate.vue";
import users from "./mytaoku/user.vue";
import user2s from "./mytaoku/user2.vue";
import user3s from "./mytaoku/user3.vue";
export default {
  components: {
    haeders,
    order,
    est,
    users,
    user2s,
    user3s
  }
};
</script>
<style lang="less" scoped>
  .aaa{
    height: 5000px;
    background:  #f5f5f5 ;
  }
</style>