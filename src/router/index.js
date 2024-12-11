import { createMemoryHistory, createRouter } from "vue-router";
import AboutPage from "../pages/AboutPage.vue";
import ResumePage from "../pages/ResumePage.vue";
import PortfolioPage from "../pages/PortfolioPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ResumeNPage from "../pages/ResumeNPage.vue";

const routes = [
  { path: "/", component: AboutPage },
  { path: "/resume", component: ResumePage },
  { path: "/resume-n", component: ResumeNPage },
  { path: "/portfolio", component: PortfolioPage },
  { path: "/contact", component: ContactPage },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
  linkActiveClass: "active-link",
});
