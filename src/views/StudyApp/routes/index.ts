import type { RouteRecordRaw } from 'vue-router';

const children: RouteRecordRaw[] = [
  { name: 'StudyApp/Palette', path: '/StudyApp/Palette', component: () => import('@/views/StudyApp/pages/Palette/index.vue') },
  { name: 'StudyApp/Banking', path: '/StudyApp/Banking', component: () => import('@/views/StudyApp/pages/Banking/index.vue') },
  { name: 'StudyApp/Calendar', path: '/StudyApp/Calendar', component: () => import('@/views/StudyApp/pages/Calendar/index.vue') },
  { name: 'StudyApp/Chat', path: '/StudyApp/Chat', component: () => import('@/views/StudyApp/pages/Chat/index.vue') },
  { name: 'StudyApp/Contacts', path: '/StudyApp/Contacts', component: () => import('@/views/StudyApp/pages/Contacts/index.vue') },
  { name: 'StudyApp/Crypto', path: '/StudyApp/Crypto', component: () => import('@/views/StudyApp/pages/Crypto/index.vue') },
  { name: 'StudyApp/Dashboard', path: '/StudyApp/Dashboard', component: () => import('@/views/StudyApp/pages/Dashboard/index.vue') },
  { name: 'StudyApp/Email', path: '/StudyApp/Email', component: () => import('@/views/StudyApp/pages/Email/index.vue') },
  { name: 'StudyApp/FileManager', path: '/StudyApp/FileManager', component: () => import('@/views/StudyApp/pages/FileManager/index.vue') },
  { name: 'StudyApp/Invoice', path: '/StudyApp/Invoice', component: () => import('@/views/StudyApp/pages/Invoice/index.vue') },
  { name: 'StudyApp/Kanban', path: '/StudyApp/Kanban', component: () => import('@/views/StudyApp/pages/Kanban/index.vue') },
  { name: 'StudyApp/LastestActivity', path: '/StudyApp/LastestActivity', component: () => import('@/views/StudyApp/pages/LastestActivity/index.vue') },
  { name: 'StudyApp/Ticketing', path: '/StudyApp/Ticketing', component: () => import('@/views/StudyApp/pages/Ticketing/index.vue') },
  { name: 'StudyApp/ToDoList', path: '/StudyApp/ToDoList', component: () => import('@/views/StudyApp/pages/ToDoList/index.vue') },
  { name: 'StudyApp/User', path: '/StudyApp/User', component: () => import('@/views/StudyApp/pages/User/index.vue') },
];

export const route: RouteRecordRaw[] = [{ name: 'StudyApp', path: '/StudyApp', redirect: '/StudyApp/Home', component: () => import('@/views/StudyApp/index.vue'), children }];
