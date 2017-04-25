<template lang="html">
  <div class="">
    <h1>模块二。。。。。。</h1>
    <div class="block btn-con">
      <span class="wrapper">
        <el-button type="success" v-on:click='add'>加+加</el-button>
        <el-button type="info" v-on:click='sub'>减-减</el-button>
      </span>
    </div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        input:this.$store.state.count
      }
    },
    created(){
      console.log(this.$store.state.count)
    },
    methods:{
      add:function() {
        this.$store.commit('add')
        this.input=this.$store.state.count
      },
      sub:function () {
        this.$store.commit('sub')
        this.input=this.$store.state.count
      },
    }
  }
</script>

<style lang="scss">
h1{
  color: red;
  font-size: 12px;
}
</style>
