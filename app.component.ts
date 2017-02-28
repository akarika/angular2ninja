import {Component} from '@angular/core';
import {RaceService} from './race.service'


@Component({
    selector: 'ponyracer-app',
    template: `
<p>{{list()}}</p>
<ns-ponies></ns-ponies>
<ns-gretting></ns-gretting>

`


})
export class PonyRacerAppComponent {
    //numberOfUsers: number = 146;
    name:string = "roux remy";
    constructor(private raceService: RaceService) {

    }

    list(){

         return this.raceService.list()[0].name;



    }
}
