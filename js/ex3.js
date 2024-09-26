const r = Number(prompt("Enter the circle radius:"));

const circle = {
  circumference: function () {
    let circumCircleVar = 2 * Math.PI * r;
    return circumCircleVar;
  },
  area: function () {
    let arCircleVar = Math.PI * r * r;
    return arCircleVar;
  },
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
