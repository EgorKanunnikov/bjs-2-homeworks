/*Задача №1*/

/*#1*/

function parseCount(value) {
   if (isNaN(Number.parseInt(value))) {
      throw new Error("Невалидное значение")
   } return Number.parseInt(value);
}

/*#2*/

function validateCount(value) {
   try { return parseCount(value) }
   catch (error) { return Error("Невалидное значение") }
}


/*Задача №2*/

/*#1*/

class Triagle {

   constructor(a, b, c) {

      this.ab = a;
      this.bc = b;
      this.ca = c;
   }
}

function getPerimeter() {
   return this.ab + this.bc + this.ca;
}

function getArea() {
   let p = this.getPerimeter() / 2
   return Number.parseFloat(math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3))
}
