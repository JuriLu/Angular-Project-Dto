import { Component } from '@angular/core';
import { travel } from 'src/dto/travel.model';
import { driver } from 'src/models/driver.model';
import { passenger } from 'src/models/passenger.model';
import { vehicle } from 'src/models/vehicle.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Project';

  Vehicles: vehicle[] = [
    {model:'Mercedes',year:2022},
    {model:'Audi',year:2022},
  ]

  Drivers: driver[] = [
    {name:'Driver 1',licenseType:'B',licenseExpDate:'01-01-2024'},
  ]

    Passengers: passenger[] = [
      {firstName:'Jurgen',lastName:'Lubonja',age:24},
      {firstName:'Person',lastName:'Number 2',age:26},
      {firstName:'Person',lastName:'Number 3',age:23},
    ]




    Travels : travel[] = [

      {
        driver:this.Drivers[0],
        vehicle: this.Vehicles[0],
        passenger: this.Passengers[0],
        travelDistance:100
      }
        ,
      {
        driver: {
          name:'Driver 1',
          licenseType:'B',
          licenseExpDate:'01-01-2024'
        },
        vehicle: {
          model:'Mercedes',
          year:2022
        },
        passenger: {
          firstName:'Jurgen',
          lastName:'Lubonja',age:24
        },
        travelDistance:100
      },
    ]


}
