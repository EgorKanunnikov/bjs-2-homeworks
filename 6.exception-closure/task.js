/*Задача №1*/

/*#1*/

function parseCount(value) {
   let result = Number.parseInt(value);
   if (isNaN(result)) {
      throw new Error("Невалидное значение")
   } return result;
}

/*#2*/

function validateCount(value) {
   try { return parseCount(value); }
   catch (error) { return error }
}


/*Задача №2*/

/*#1*/

class Triangle {

   constructor(a, b, c) {
      this.a = +a;
      this.b = +b;
      this.c = +c;

      if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
         throw new Error("Треугольник с такими сторонами не существует");
      }
   }

   getPerimeter() {
      let perimeter = (this.a + this.b + this.c);
      return perimeter;
   }

   getArea() {
      let perTriangle = this.getPerimeter();
      let p = perTriangle / 2;
      let area = +(Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)))).toFixed(3);
      return area;
   }
}

function getTriangle(a, b, c) {
   try {
      return new Triangle(a, b, c);
   } catch (err) {
      return {
         getArea() {
            return ("Ошибка! Треугольник не существует");
         },
         getPerimeter() {
            return ("Ошибка! Треугольник не существует");
         }
      }
   }
}
