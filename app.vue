<template>
  <div>
    
    <MyMenu></MyMenu>
    <router-view></router-view>
    
  </div>
</template>
<script>
import HomePage from './components/HomePage.vue'
export default {
  components: { HomePage},
}
</script>
<style>
body{
  margin: 0%;
  padding: 0%;
  background-image: linear-gradient(186.9deg,#fff 1.88%,#f9fafd 10.48%);
  overflow-x:hidden ;
}
</style>