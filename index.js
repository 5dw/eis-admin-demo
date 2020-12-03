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
    DemoBtn: () => import('./view/demoBtn.vue'),
  },
  mock: (Mock) => {
    Mock.mock('/api/demo/mock', 'get', () => ({
      data: 'this is from the mock.'
    }));
  }
};
