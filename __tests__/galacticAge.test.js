import { exportAllDeclaration } from '@babel/types';
import { testPathPatternToRegExp } from 'jest-util';
import Life from './../src/galacticAge.js';

describe('Life', () => {

  let user; 
  let oldUser;
  beforeEach(() => {
    user = new Life(18);
    oldUser = new Life (80);
  })

  test('should create an object from the life constructor', () => {
    expect(user.age).toEqual(18);
    expect(user.lifeExpectancy).toEqual(79);
    expect(user.mercury).toEqual(75);
    expect(user.venus).toEqual(29.032258064516128);
    expect(user.mars).toEqual(9.574468085106384);
    expect(user.jupiter).toEqual(1.5177065767284992);
  });

  test('it should return your life expectancy on mercury', () => {
    user.mercuryExpectancy();
    expect(user.lifeExpectancy).toEqual(329.1666666666667);
  });

  test('it should return your life expectancy on venus', () => {
    user.venusExpectancy();
    expect(user.lifeExpectancy).toEqual(127.41935483870968)
  });

  test('it should return your life expectancy on mars', () => {
    user.marsExpectancy();
    expect(user.lifeExpectancy).toEqual(42.02127659574468)
  });

  test('it should return your life expectancy on jupiter', () =>{
    user.jupiterExpectancy();
    expect(user.lifeExpectancy).toEqual(6.661045531197302)
  });

  test('it should tell you your remaining years left on mercury', () => {
    expect(user.mercTimeLeft).toEqual(254.16666666666669);
  });

  test('it should tell you your remaining years left on venus', () => {
    expect(user.venTimeLeft).toEqual(98.38709677419355)
  });

  test('it should tell you your remaining years left on mars', () => {
    expect(user.marsTimeLeft).toEqual(32.4468085106383)
  });

  test('it should tell you your remaining years left on jupiter', () => {
    expect(user.jupTimeLeft).toEqual(5.143338954468803)
  });

  test('it should return number of years lived past life expectancy', () => {
    expect(oldUser.yearsPastExpectancy()).toEqual(1);
  });

  test('it should return the number of years left to live', () => {
    expect(user.yearsPastExpectancy()).toEqual("you have 61 years left")
  });

})

