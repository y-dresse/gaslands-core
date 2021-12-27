import { expect } from "chai";
import { Vehicle } from "../src/vehicle";


describe('Vehicle Test', () => {
    let vehicle : Vehicle;

    beforeEach((done) => {
        vehicle = new Vehicle("", "", 0, 0, 0, 0, 0, 0);
        done();
    });

    it('should create an empty vehicle', () => {
        // Assert
        expect(vehicle).is.instanceOf(Vehicle)
    });

    it('should open a list vehicle from file', () => {
        // Act
        const vehicles = Vehicle.openVehicles();
        // Assert
        expect(vehicles).is.instanceOf(Array);
    });
})