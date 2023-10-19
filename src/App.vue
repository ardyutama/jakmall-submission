<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import PageComponentVue from './views/DeliveryView.vue'
import NavigationHeader from './components/NavigationHeader.vue'
</script>

<template>
  <!-- <header>

    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
  <header>
    <NavigationHeader />
  </header>

  <div class="box">
    <div class="details">
      <RouterView />
    </div>
    <div class="summary">

    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700&family=Noto+Sans:wght@400;500;900&display=swap');

* {
  padding: 0px;
  margin: 0px;
}

body {
  font-family: 'Inter', sans-serif;
  background: #FFFAE6;
}

header {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
}

.box {
  display: flex;
  height: auto;
  margin-top: -24px;
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 4px;
  background: #FFF;
  box-shadow: 2px 10px 20px 0px rgba(255, 138, 0, 0.10);
  padding-top: 30px;
  padding-left: 40px;
  padding-right: 20px;
  padding-bottom: 20px;
}

.summary {
  display: flex;
  width: 300px;
  border-left: 1px rgba(255, 138, 0, 0.2) solid;
}

.details {
  width: 100%;
  height: 550px;  
  margin: 0 auto;
  display: flex;
}
</style>
