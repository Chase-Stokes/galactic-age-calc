export default class Life {

  constructor(age, mercTimeLeft, venTimeLeft, marsTimeLeft, jupTimeLeft){
    this.age = age
    this.lifeExpectancy = 79
    this.mercury = (this.age / .24)
    this.venus = (this.age / .62)
    this.mars = (this.age / 1.88)
    this.jupiter = (this.age / 11.86)
    this.mercTimeLeft = (this.lifeExpectancy / .24) - ( this.age / .24)
    this.venTimeLeft = (this.lifeExpectancy / .62) - ( this.age / .62)
    this.marsTimeLeft = marsTimeLeft
    this.jupTimeLeft = jupTimeLeft
  }
}


Life.prototype.mercuryExpectancy = function(){
  this.lifeExpectancy /= .24;
  return this.lifeExpectancy;
}

Life.prototype.venusExpectancy = function(){
  this.lifeExpectancy /= .62;
  return this.lifeExpectancy;
}

Life.prototype.marsExpectancy = function(){
  this.lifeExpectancy /= 1.88;
  return this.lifeExpectancy;
}

Life.prototype.jupiterExpectancy = function(){
  this.lifeExpectancy /= 11.86;
}
