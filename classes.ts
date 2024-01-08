class Vehicle {
    public drive(): void{
        console.log('chugga chuagga');
    }
    public honk(): void {
    console.log('beep')
}
}

class Car extends Vehicle{
    public drive(): void {
        console.log('vroom');
    }
    startDrivingProcess(): void {
        this.drive();
    }
}
// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car();
car.drive();
car.honk();