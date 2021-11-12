import { exportAllDeclaration } from '@babel/types';
import { testPathPatternToRegExp } from 'jest-util';
import Life from './../src/galacticAge.js';

describe('Life', () => {
  test('should create an object from the life constructor', () => {
    const user = new Life (18);
    expect(user.age).toEqual(18);
    expect(user.lifeExpectancy).toEqual(79);
    expect(user.mercury).toEqual();
    expect(user.venus).toEqual();
    expect(user.mars).toEqual();
    expect(user.jupiter).toEqual();
  })
})

    // this.mercury = (this.age / .24)
    // this.venus = (this.age / .62)
    // this.mars = (this.age / 1.88)
    // this.jupiter = (this.age / 11.86)