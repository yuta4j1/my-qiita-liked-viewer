import * as React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../index';
import { User } from '@/types';

it('<Login /> component', () => {
  const fnMock = (usr: User) => {};
  const tree = renderer.create(<Login storeUserInfo={fnMock} />).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
