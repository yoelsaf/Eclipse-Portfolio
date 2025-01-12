import { createMemoryHistory, createRouter } from "vue-router";
import AboutPage from "../pages/AboutUsPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ServicesPage from "../pages/ServicesPage.vue";
import ProjectPage from "../pages/ProjectPage.vue";

const routes = [
  { path: "/", component: AboutPage },
  { path: "/services", component: ServicesPage },
  { path: "/projects", component: ProjectPage },
  { path: "/contact", component: ContactPage },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
  linkActiveClass: "active-link",
});
