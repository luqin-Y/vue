<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="block btn-con">
      <span class="wrapper">
        <el-button type="success" v-model='router1' v-on:click='btn1'>{{ router1 }}</el-button>
        <el-button type="warning" v-model='router2' v-on:click='btn2'>{{ router2 }}</el-button>
        <el-button type="danger" v-model='router3'>{{ router3 }}</el-button>
        <el-button type="info" v-model='router4'>{{ router4 }}</el-button>
      </span>
    </div>
    <router-view></router-view>

  </div>

</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      router1: 'P-router1',
      router2: 'P-router2',
      router3: 'P-router3',
      router4: 'P-router4'
    }
  },
  methods: {
    btn1: function (evt) {
      this.$router.push({path: '/m1'})
    },
    btn2: function (evt) {
      this.$router.push({path: '/'})
    },
  }
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
