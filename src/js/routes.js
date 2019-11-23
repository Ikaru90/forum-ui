const messages = () => import('./components/messages');
const notFound = () => import('./components/notFound');

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