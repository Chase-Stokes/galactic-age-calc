import { exportAllDeclaration } from '@babel/types';
import { testPathPatternToRegExp } from 'jest-util';
import Life from './../src/galacticAge.js';

describe('Life', () => {

  test('should create an object from the life constructor', () => {
    let user = new Life(18)
    expect(user.age).toEqual(18);
    expect(user.lifeExpectancy).toEqual(79);
    expect(user.mercury).toEqual(75);
    expect(user.venus).toEqual(29.032258064516128);
    expect(user.mars).toEqual(9.574468085106384);
    expect(user.jupiter).toEqual(1.5177065767284992);
  });

  test('it should return your life expectancy on mercury', () => {
    let user = new Life(18);
    user.mercuryExpectancy();
    expect(user.lifeExpectancy).toEqual(329.1666666666667);
  });

  test('it should return your life expectancy on venus', () => {
    let user = new Life(18);
    user.venusExpectancy();
    expect(user.lifeExpectancy).toEqual(127.41935483870968)
  });

  test('it should return your life expectancy on mars', () => {
    let user = new Life(18);
    user.marsExpectancy();
    expect(user.lifeExpectancy).toEqual(42.02127659574468)
  });

  test('it should return your life expectancy on jupiter', () =>{
    let user = new Life(18);
    user.jupiterExpectancy();
    expect(user.lifeExpectancy).toEqual(6.661045531197302)
  });
})

