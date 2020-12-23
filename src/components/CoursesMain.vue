<template>
  <div class="courses-main">
    <div class="courses-main__filter">
      <button @click="less">По убыванию</button>
      <button @click="more">По Возрастанию</button>
    </div>
    <div class="courses-main__list">
      <CoursesList
        v-for="course in sortCourses()"
        :key="course.id"
        :name="course.name"
        :price="course.price"
        :description="course.description"
        :date="course.date"
        :id="course.id"
      />
    </div>
  </div>
</template>

<script>
import CoursesList from "@/components/CoursesList";
import { computed, reactive } from "vue";
import { useStore } from "vuex";
export default {
  name: "CoursesMain",
  components: {
    CoursesList
  },
  setup() {
    const state = reactive({
      clickedMore: false,
      clickedLess: false
    });

    const store = useStore();
    let courses;
    function less() {
      state.clickedLess = true;
      state.clickedMore = false;
      courses = computed(() =>
        store.state.courses.sort((a, b) => Number(a.price) - Number(b.price))
      );
      return courses.value;
    }
    function more() {
      state.clickedMore = true;
      state.clickedLess = false;
      courses = computed(() =>
        store.state.courses.sort((a, b) => Number(b.price) - Number(a.price))
      );
      return courses.value;
    }
    function sortCourses(){
      if(state.clickedMore){
        return more();
      }
      else if(state.clickedLess){
        return less();
      }else{
        courses = computed(() => store.state.courses);
        return courses.value;
      }
    }
    return {
      courses,
      state,
      less,
      more,
      sortCourses
    };
  }
};
</script>

<style lang="scss" scoped>
.courses-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  .courses-main__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .courses-main__filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    button {
      border: none;
      border-radius: 5px;
      background-color: hotpink;
      outline: none;
      color: white;
      cursor: pointer;
      padding: 0.5rem 1rem;
    }
  }
}
</style>
