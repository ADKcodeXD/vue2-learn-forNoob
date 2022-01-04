<template>
  <div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
            <Banner></Banner>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
            <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Home from './pages/Home.vue';
import About from './pages/About.vue'
// import News from './pages/News.vue'
// import Message from './pages/Message.vue';
  export default {
    name: 'app',
    components: {
      Banner,
      Home,
      About,
      // News,
      // Message
    }

  }
</script>

<style>

</style>