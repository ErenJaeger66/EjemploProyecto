<template>
  <div id="app">
     <div class="container">
        <img src="@/assets/banner.jpg" alt="" id="banner"/>      
        <b-card title="Card Title" no-body>
        <b-card-header header-tag="nav">
          <MenuPub></MenuPub>
        </b-card-header>

        <b-card-body>
          <router-view></router-view>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
import MenuPub from '@/components/MenuPub.vue'
  export default  {
    components: {
      MenuPub
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: SteelBlue;
}

#banner{
  width: 100%;
}
</style>