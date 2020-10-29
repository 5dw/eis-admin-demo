import demoBtn from './view/demoBtn.vue';

export default {
  config: {
    age: 20,
    backendDependencies: [],
  },
  routers: [
    {
      path: '',
      name: 'demo',
      component: () => import('./view/demo'),
    },
  ],
  components: {
    DemoBtn: demoBtn,
  },
};
