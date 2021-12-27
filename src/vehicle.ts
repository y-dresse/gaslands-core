import fs = require('fs');
import YAML = require('yaml');
import path = require('path');

export class Vehicle {
    
    type: string;
    weight: string;
    hull: number;
    handling: number;
    max_gear: number;
    crew: number;
    build_slots: number;
    cost: number;

    constructor(type: string, weight: string, hull: number, handling: number, max_gear: number, crew: number, build_slots: number, cost: number){
        this.type = type;
        this.weight = weight;
        this.hull = hull;
        this.handling = handling;
        this.max_gear = max_gear;
        this.crew = crew;
        this.build_slots = build_slots;
        this.cost = cost;
    }
    
    static getVehicles() {
        const file = YAML.parse(fs.readFileSync(path.resolve(__dirname, 'config', 'vehicles.yml'), 'utf-8'));
        return file
    }
    static openVehicles() : Array<Vehicle> {
        const vehiclesArray = Vehicle.getVehicles();
        return vehiclesArray.map((v: Vehicle) => new Vehicle(v.type, v.weight, v.hull, v.handling, v.max_gear, v.crew, v.build_slots, v.cost));
    }
}
