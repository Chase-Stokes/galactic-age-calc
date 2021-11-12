export default class Life {

  constructor(age){
    this.age = age
    this.lifeExpectancy = 79
    this.mercury = (this.age / .24)
    this.venus = (this.age / .62)
    this.mars = (this.age / 1.88)
    this.jupiter = (this.age / 11.86)
  }
}

Life.prototype.mercuryExpectancy = function(){
  this.lifeExpectancy /= .24;
  return this.lifeExpectancy;
}

Life.prototype.venusExpectancy = function(){
  
}