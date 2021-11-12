import { exportAllDeclaration } from '@babel/types';
import { testPathPatternToRegExp } from 'jest-util';
import Life from './../src/galacticAge.js';

describe('Life', () => {
  test('should create an object from the life constructor', () => {
    const user = new Life (18);
    expect(user.age).toEqual(18);
    expect(user.lifeExpectancy).toEqual(79);
    expect(user.mercury).toEqual(75);
    expect(user.venus).toEqual(29.03);
    expect(user.mars).toEqual(9.57);
    expect(user.jupiter).toEqual(1.52);
  })
})
