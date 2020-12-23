<template>
  <div class="courses-list">
    <div class="course-list__items">
      <div class="course-list__items__header">
        <h2>{{ name }}</h2>
        <p class="price">{{ toCurrency }}</p>
      </div>
      <div class="course-list__items__description">
        <p>{{ description }}</p>
      </div>
      <p>{{ date }}</p>
    </div>
    <div class="course-list__items__controllers">
      <router-link :to="{name:'Course',params:{id}}">Подробнее</router-link>
      <router-link :to="{name:'Edit',params:{id}}">Редактировать</router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "CoursesList",
  props:{
    name:{
      type:String,
      required:true,
    },
    price:{
      type:Number,
      required:true,
    },
    description:{
      type:String,
      required:true,
    },
    date:{
      type:String,
      required:true
    },
    id:{
      type:Number,
      required:true
    }
  },
  computed:{
    toCurrency(){
      return new Intl.NumberFormat('az-Cyrl',{
        currency:'azn',
        style:'currency'
      }).format(this.price);
    }
  },
}
</script>

<style lang="scss" scoped>
 .courses-list{
   max-width: 300px;
   border: 1px solid black;
   margin: 15px;
   box-shadow: 0px 4px 30px -13px rgba(0,0,0,0.75);
   border-radius:0 0 15px 15px;
   display: flex;
   justify-content: center;
   align-items: flex-start;
   flex-direction: column;
   .course-list__items__header{
     background-color: rebeccapurple;
     color: white;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: .5rem;
     h2{
       font-size: 16px;
     }
   }
   .course-list__items__description{
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 15px;
     height: 300px;

   }
   .course-list__items__controllers{
     display: flex;
     justify-content: space-around;
     align-items: center;
     width: 100%;
     height: 100px;
     a{
       border-radius: 5px;
       border: none;
       outline: none;
       padding: .5rem;
       cursor: pointer;
       font-size: 16px;
       text-decoration: none;
       color: rebeccapurple;
     }
     a:hover{
       text-decoration: underline;
     }
   }
 }
</style>