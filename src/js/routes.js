const messages = () => import('./pages/messages');
const notFound = () => import('./pages/notFound');
const login = () => import('./pages/login');

const routes = [
  {
    path: '/',
  },
  {
    path: '/messages',
    name: 'messages',
    component: messages
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '*',
    name: 'notFound',
    component: notFound
  },
];

export default routes;