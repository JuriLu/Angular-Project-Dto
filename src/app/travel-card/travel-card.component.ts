import { Component, OnInit } from '@angular/core';
import {vehicle} from "../../models/vehicle.model";
import {driver} from "../../models/driver.model";
import {passenger} from "../../models/passenger.model";
import {travel} from "../../dto/travel.model";

@Component({
  selector: 'app-travel-card',
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.scss']
})
export class TravelCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  Vehicles: vehicle[] = [
    {model:'Mercedes',year:2022},
    {model:'Audi',year:2020},
    {model:'Volkswagen',year:2015},
    {model:'Bmw',year:2016},

  ]

  Drivers: driver[] = [
    {name:'John',licenseType:'D',licenseExpDate:'20-05-2030'},
    {name:'Jost',licenseType:'C',licenseExpDate:'16-09-2035'},
    {name:'Max',licenseType:'C',licenseExpDate:'28-02-2035'},
  ]

  Passengers: passenger[] = [
    {firstName:'Jonelle',lastName:'Ewart',age:24},
    {firstName:'Deborah',lastName:'Terry',age:26},
    {firstName:'Kimberley',lastName:'Hancock',age:23},
  ]




  Travels : travel[] = [

    {
      driver:this.Drivers[0],
      vehicle: this.Vehicles[0],
      passenger: this.Passengers[0],
      travelDistance:200
    }
    ,
    {
      driver: {
        name:'Brady',
        licenseType:'c',
        licenseExpDate:'07-11-2040'
      },
      vehicle: {
        model:'Volkswagen',
        year:2016
      },
      passenger: {
        firstName:'Jurgen',
        lastName:'Lubonja',age:24
      },
      travelDistance:100
    },
  ]

}
