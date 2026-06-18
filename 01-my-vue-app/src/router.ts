import { createWebHistory, createRouter } from "vue-router"
import About from "./pages/About.vue"
import Home from "./pages/Home.vue"
import NotFound from "./pages/NotFound.vue";
import type { NavItems } from "./models/NavItem.ts";
import todosRoutes from "./modules/todos/router.ts";


export const navItems: NavItems = [
  { path: '/', component: Home, name: 'Home', meta: { title: 'Home Page', mainMenu: true, roles: ['public'] } },
  { path: '/about', component: About, name: 'About', meta: { title: 'About Page', mainMenu: true, roles: ['public'] } },
  ...todosRoutes,
  { path: '/:pathMatch(.*)*', component: NotFound, name: 'NotFound', meta: { title: 'Not Found', mainMenu: false, roles: ['public'] } },
]

const router = createRouter({
  history: createWebHistory(),
  routes: navItems,
})

export default router