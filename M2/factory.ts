interface Vehicle {
    type: string;
}

class CarT implements Vehicle {
    type = "car";
}

class BikeT implements Vehicle {
    type = "bike";
}

class VehicleFactoryT {
    createVehicle(vehicleType: "car" | "bike"): Vehicle | null {
        if (vehicleType === "car") {
            return new Car();
        } else if (vehicleType === "bike") {
            return new Bike();
        } else {
            return null; // TypeScript obriga a tratar o caso de tipo inválido
        }
    }
}

const factoryT = new VehicleFactory();
const vehicle1T = factory.createVehicle("car");
const vehicle2T = factory.createVehicle("plane"); // Erro de compilação: Type '"plane"' is not assignable to type '"car" | "bike"'

console.log(vehicle1?.type); // Saída: car
console.log(vehicle2?.type); // Não compila devido ao tipo inválido


/*TypeScript impede a criação de tipos inexistentes. 
Definimos o parâmetro vehicleType como um tipo de união ("car" | "bike"), e o compilador nos alerta sobre qualquer tipo inválido. 
Além disso, o TypeScript força a tratar o caso de tipo inválido, o que aumenta a segurança do código */
