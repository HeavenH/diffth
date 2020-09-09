import User from '../entitys/User';

test('it should be ok', () => {
  const user = new User();

  user.email = 'gilmar@heaven.com';

  expect(user.email).toEqual('gilmar@heaven.com');
});
