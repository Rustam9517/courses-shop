<template>
  <form>
    <h1>
      Редактировать <strong>{{ course.name }}</strong>
    </h1>
    <div class="name-input">
      <label for="name">Название Курса: </label>
      <input type="text" id="name" v-model="state.name" />
    </div>
    <div class="price-input">
      <label for="price">Цена: </label>
      <input type="number" id="price" v-model="state.price" />
    </div>
    <div class="desc-input">
      <label for="description">Описание: </label>
      <textarea
        id="description"
        rows="10"
        cols="30"
        v-model="state.description"
      ></textarea>
    </div>
    <div class="date-input">
      <label for="date">Дата: </label>
      <input type="text" id="date" v-model="state.date" />
    </div>
    <div class="controllers">
      <router-link to="/">
        <span @click="editCourse">Изменить</span>
      </router-link>
      <router-link to="/" class="remove">
        <span @click="RemoveCourse">Удалить</span>
      </router-link>
    </div>
  </form>
</template>

<script>
import { useRoute } from "vue-router";
import { computed, reactive } from "vue";
import { useStore } from "vuex";
export default {
  name: "CourseEdit",
  setup() {
    const route = useRoute();
    const store = useStore();
    const courseId = computed(() => route.params.id);
    const course = computed(() =>
      store.state.courses.find(
        el => el.id.toString() === courseId.value.toString()
      )
    );
    const state = reactive({
      name: course.value.name,
      price: course.value.price,
      description: course.value.description,
      date: course.value.date,
      id: course.value.id
    });
    async function editCourse() {
      await store.dispatch("editCourse", state);
    }
    async function RemoveCourse() {
      const newCourses = computed(() =>
        store.state.courses.filter(
          el => el.id.toString() !== courseId.value.toString()
        )
      );
      await store.dispatch("setRemoveCourse", newCourses.value);
    }
    return {
      course,
      RemoveCourse,
      state,
      editCourse
    };
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    margin-bottom: 15px;
  }
  .controllers {
    padding-top: 30px;
    a {
      text-decoration: none;
      font-size: 25px;
      background-color: rebeccapurple;
      color: white;
      border-radius: 5px;
      padding: 5px 15px;
    }
    .remove {
      background-color: indianred;
    }
  }
}
</style>