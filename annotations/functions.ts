const add = (a: number,b : number) => {
  return a+b;
};

const subtract = (a: number, b: number) : number => {
  return a-b
}

function divide(a: number,b: number): number{
  return a/b
}

const multifly = function (a: number, b: number): number {
  return a*b;
}

const logger = (message: string)=> {
  console.log (message);
};

const throwError = (message: string): string => {
  if (!message){
    throw new Error (message)
  }
  return message;
};

const forecast = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// logWeather(todaysWeather)

