const messages = () => import('./pages/messages');
const notFound = () => import('./pages/notFound');

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
    path: '*',
    name: 'notFound',
    component: notFound
  },
];

export default routes;