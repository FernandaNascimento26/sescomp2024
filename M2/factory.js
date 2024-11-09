class Car {
    constructor() {
        this.type = "car";
    }
}

class Bike {
    constructor() {
        this.type = "bike";
    }
}

class VehicleFactory {
    createVehicle(vehicleType) {
        if (vehicleType === "car") {
            return new Car();
        } else if (vehicleType === "bike") {
            return new Bike();
        }
    }
}

const factory = new VehicleFactory();
const vehicle1 = factory.createVehicle("car");
const vehicle2 = factory.createVehicle("plane"); // Nenhum erro, mas isso é incorreto
console.log(vehicle1.type); // Saída: car
console.log(vehicle2.type); // Saída: undefined


/*Notem que nada impede que a VehicleFactory crie um tipo inexistente, como plane. Esse erro só será detectado em tempo de execução. */
