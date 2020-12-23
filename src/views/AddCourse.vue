<template>
  <form >
    <h1>Добавить Новый Курс</h1>
    <div class="name-input">
      <label for="name">Название Курса: </label>
      <input type="text" id="name" placeholder="Название" v-model="state.name" />
    </div>
    <div class="price-input">
      <label for="price">Цена: </label>
      <input type="number" id="price" placeholder="Цена" v-model.number=state.price />
    </div>
    <div class="desc-input">
      <label for="description">Описание: </label>
      <textarea  id="description" rows="10" cols="30" placeholder="Описание" v-model="state.description"></textarea>
    </div>
    <div class="date-input">
      <label for="date">Дата: </label>
      <input type="text" id="date" placeholder="Дата" v-model="state.date"/>
    </div>

    <div class="controllers">
      <p v-if="state.valid">Некоторые поля пустые</p>
      <router-link :to="state.route">
        <span @click="sentToStore">Добавить</span>
      </router-link>
    </div>
  </form>
</template>

<script>
import {computed,reactive} from 'vue';
import {useStore} from 'vuex';
export default {
name: "AddCourse",
  setup: function () {
    const store = useStore();
    const course = computed(() => store.state.courses);
    const state = reactive({
      id: Number(course.value.length + 1),
      name: '',
      price: null,
      description: '',
      date: '',
      valid: false,
      route: ''
    });
    console.log(state.id);

    async function sentToStore() {
      if (state.name && state.price && state.description && state.date) {
        state.route = "/";
        await store.dispatch("setNewCourse", state);
      } else {
        state.valid = true;
      }
    }

    return {
      course,
      state,
      sentToStore
    }
  }
}
</script>

<style lang="scss" scoped>
form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    margin-bottom: 15px;
  }
  .controllers{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 30px;
    a{
      text-decoration: none;
      font-size: 25px;
      background-color: rebeccapurple;
      color: white;
      border-radius: 5px;
      padding: 5px 15px;
    }
    p{
      color: red;
      font-size: 30px;
    }
  }
}
</style>