<template>
  <div class="container">
    <Birthdate></Birthdate>
    <div class="line">
      <hr/>
      <button @click="this.dateStore.showDate">
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#fff" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
      </button>
    </div>
    <Age></Age>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import Birthdate from './components/birthdate.vue';
import Age from './components/age.vue';
import { useDateStore } from '@/stores/DateStore';

export default {
  computed: {
    ...mapStores(useDateStore)
  },
  name: 'App',
  components: { Birthdate, Age }
}
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  /* color: #2c3e50; */
}
.container{
  display: flex;
  width: 800px;
  margin: 0 auto;
  flex-direction: column;
  background-color: #ffffff;
  /* align-items: center; */
  /* justify-content: center; */
  /* gap: 20px; */
  padding: 3rem;
}
hr{
  width: 100%;
  position: absolute;
  top: 50%;
  background-color: red;
  padding-left: .5rem;
}
button{
  padding: 20px 20px;
  position: relative;
  z-index: 1;
  background-color: hsl(259, 100%, 65%);
  border-radius: 100%;
  border: none;

}
.line{
  display: flex;
  position: relative;
  width: 100%;
  padding: 1rem;
  /* background-color: blueviolet; */
  justify-content: flex-end;
}


</style>
