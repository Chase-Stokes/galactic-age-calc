import { exportAllDeclaration } from '@babel/types';
import { testPathPatternToRegExp } from 'jest-util';
import Life from './../src/galacticAge.js';

describe('Life', () => {
  let user;

  beforeEach(() => {
    user = new Life(18);
  });

  test('should create an object from the life constructor', () => {
    expect(user.age).toEqual(18);
    expect(user.lifeExpectancy).toEqual(79);
    expect(user.mercury).toEqual(75);
    expect(user.venus).toEqual(29.03);
    expect(user.mars).toEqual(9.57);
    expect(user.jupiter).toEqual(1.52);
  });

  test('it should return your life expectancy on mercury', () => {
    user.mercuryExpectancy();
    expect()toEqual();
  })
})
