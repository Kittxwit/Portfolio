import { createRouter, createWebHashHistory } from 'vue-router'; // ← เปลี่ยนตรงนี้
import Home from './pages/Home.vue';
import ProjectDetail from './pages/ProjectDetail.vue';
import Experience from './pages/Experience.vue';
import DesignDetail from './pages/DesignDetail.vue';
import ActivityDetail from './pages/ActivityDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/project/:id', name: 'ProjectDetail', component: ProjectDetail },
  { path: '/experience/:id', name: 'ExperienceDetail', component: Experience },
  { path: '/design/:id', name: 'DesignDetail', component: DesignDetail },
  { path: '/activity/:id', name: 'ActivityDetail', component: ActivityDetail },
];

const router = createRouter({
  history: createWebHashHistory(), // ← เปลี่ยนตรงนี้
  routes,
});

export default router;