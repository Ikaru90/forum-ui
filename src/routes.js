const themesList = () => import('./pages/themesList');
const notFound = () => import('./pages/notFound');
const theme = () => import('./pages/theme');

const routes = [
  {
    path: '/',
    component: themesList
  },
  {
    path: '/theme/:id',
    name: 'theme-id',
    component: theme
  },
  {
    path: '*',
    name: 'notFound',
    component: notFound
  }
];

export default routes;
