const messages = () => import('./pages/messages');
const notFound = () => import('./pages/notFound');
const login = () => import('./pages/login');
const signup = () => import('./pages/signup');

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
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '*',
    name: 'notFound',
    component: notFound
  },
];

export default routes;