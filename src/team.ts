import { Vehicle } from "vehicle";

export class Team {

    vehicles : Array<Vehicle>;
    cans: number;

    constructor(cans: number = 50){
        this.cans = cans;
        this.vehicles = new Array<Vehicle>();
    }
}