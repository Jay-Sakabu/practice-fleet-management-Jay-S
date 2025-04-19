class Vehicles
{
    constructor(type, make, model, year, mileage = 0)
    {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    drive(distance)
    {
        return this.mileage += distance;
    }

    getDetails()
    {
        console.log(`Selected vehicle is a ${this.type} of make & model ${this.make} ${this.model} with a year of ${this.year} and mileage at: ${this.mileage}`);
    }
}

let car = new Vehicles("Car", "Hyundai", "Sonata", 2018, 5000);
let truck = new Vehicles("Truck", "Mitsubishi", "Monster", 1892, 17000);
let motorcycle = new Vehicles("Motorcycle", "Polaris", "Slingshot", 1738);

car.drive(700);
truck.drive(900);
motorcycle.drive(1700);

car.getDetails();
truck.getDetails();
motorcycle.getDetails();