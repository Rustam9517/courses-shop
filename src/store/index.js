import { createStore } from "vuex";

export default createStore({
  state: {
    courses: null
  },
  mutations: {
    SET_COURSES(state, course){
      state.courses = course;
    },
    SET_REMOVE_COURSE(state, course){
      state.courses = course;
    },
    SET_NEW_COURSE(state, course){
      state.courses.unshift(course);
    },
    EDIT_COURSE(state, course){
      const foundIndex = state.courses.findIndex(x => x.id.toString() === course.id.toString());
      state.courses[foundIndex] = course;
    },
  },
  actions: {
    setCourses({ commit }, course) {
      commit("SET_COURSES", course);
    },
    setRemoveCourse({ commit }, course){
      commit('SET_REMOVE_COURSE',course);
    },
    setNewCourse({ commit }, course){
      commit('SET_NEW_COURSE',course);
    },
    editCourse({ commit }, courseId, course){
      commit('EDIT_COURSE',courseId,course);
    }
  },
  modules: {}
});
