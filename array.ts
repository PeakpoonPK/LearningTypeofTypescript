const carMakers =['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][]=[];

//Help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);


// Help with 'map'

carMakers.map((car: string): string => {
    return car.toUpperCase();
});

//Flexible types
const importantantDates: (Date | string)[] = [new Date()];
importantantDates.push('2030-10-10');
importantantDates.push(new Date())
