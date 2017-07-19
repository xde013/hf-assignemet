<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import TopicList from './components/TopicList.vue';
import Comment from './components/Comment.vue';

export default {
  
  name: 'app',
   
   components: {
    TopicList,
    Comment
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
