// const messages = () => import('./pages/messages');
const notFound = () => import('./pages/notFound');

const routes = [
  {
    path: '/'
  },
  {
    path: '/theme/:id',
    name: 'theme-id',
    component: notFound
  },
  {
    path: '*',
    name: 'notFound',
    component: notFound
  }
];

export default routes;
