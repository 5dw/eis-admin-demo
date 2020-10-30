import demoBtn from './view/demoBtn.vue';

export default {
  config: {
    age: 20,
    backendDependencies: ['demo'],
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
  mock: (Mock) => {
    Mock.mock('/api/demo/mock', 'get', () => ({
      data: 'this is from the mock.'
    }));
  }
};
