<template>
<div class="course-profile" v-if="course">
  <h1>{{course.name}}</h1>
  <p>{{course.description}}</p>
  <p class="price">{{price}}</p>
  <p>{{course.date}}</p>
</div>
</template>
<script>
import {useRoute} from "vue-router";
import {computed} from 'vue';
import {useStore} from 'vuex';
export default {
  name: "CourseProfile",
  setup(){
   const route = useRoute();
   const store = useStore();
   const courseId = computed(()=>route.params.id);
   const course = computed(()=>  store.state.courses.find(el => el.id.toString() === courseId.value.toString()));
   function toCurrency(){
     return new Intl.NumberFormat('az-Cyrl',{
       currency:'azn',
       style:'currency'
     }).format(course.value.price);
   }
   return{
     course,
     price:toCurrency()
   }
  }
}
</script>

<style scoped>

</style>