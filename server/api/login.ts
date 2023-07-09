export default defineEventHandler((event) => {
  return {
    code: 200,
    data: {
      name: 'test',
      roles: ['admin'],
      dept: 'testDept',
      id: 12341,
      token: 'x123@!sdfc04dfl',
    },
    messsage: 'ok',
  };
});
