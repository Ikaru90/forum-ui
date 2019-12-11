const messages = () => import('./pages/messages');
const notFound = () => import('./pages/notFound');

const routes = [
  {
    path: '/'
  },
  {
    path: '/theme',
    name: 'theme',
    component: messages
  },
  {
    path: '/theme/:id',
    name: 'theme-id',
    component: messages
  },
  {
    path: '*',
    name: 'notFound',
    component: notFound
  }
];

export default routes;
