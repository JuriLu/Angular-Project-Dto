import { driver } from "src/models/driver.model";
import { passenger } from "src/models/passenger.model";
import { vehicle } from "src/models/vehicle.model";

export interface travel {
    driver: driver
    vehicle: vehicle
    passenger: passenger
    travelDistance: number;
}