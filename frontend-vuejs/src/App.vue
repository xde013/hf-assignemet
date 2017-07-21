<template>
  <div id="app">
        <div class="row">
        <div class="col s12 white-text">       
          <h3>Fake News</h3>
          <p class="flow-text">
            So fake, so sad.
          </p>
          <router-link class="waves-effect  btn waves-orange black right" :to="{name: 'submit'}"> Log out </router-link>
          <router-link class="waves-effect btn waves-orange black right" :to="{name: 'submit'}"> Profile </router-link>
          <router-link class="waves-effect btn waves-orange black right" :to="{name: 'submit'}"> Submit </router-link>
        </div>
      </div>
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
::selection {
    color: white;
    background: black;
}
</style>
