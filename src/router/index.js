import {createRouter, createWebHistory} from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";
import * as data from '../assets/data.json';
import CourseProfile from "@/views/CourseProfile";
import CourseEdit from "@/views/CourseEdit";
import AddCourse from "@/views/AddCourse";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/course/:id",
    name: "Course",
    component: CourseProfile
  },
  {
    path: "/course/edit/:id",
    name: "Edit",
    component: CourseEdit
  },
  {
    path: "/add",
    name: "Add",
    component: AddCourse
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach(async () =>{
  const courses = await store.state.courses;
  const course = data.courses;
  if(!courses){
    await store.dispatch("setCourses", course);
  }
});
export default router;
