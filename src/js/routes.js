const kenobi = () => import('./components/kenobi');
const grievous = () => import('./components/grievous');
const notFound = () => import('./components/notFound');

const routes = [
  {
    path: '/',
  },
  {
    path: '/kenobi',
    name: 'kenobi',
    component: kenobi
  },
  {
    path: '/grievous',
    name: 'grievous',
    component: grievous
  },
  {
    path: '*',
    name: 'notFound',
    component: notFound
  },
];

export default routes;