import {Component} from '@angular/core';
import {RaceService} from './race.service'
@Component({
    selector: 'ponyracer-app',
    template: `<h1>Ponyracer</h1>
<p>{{list()}}</p>
`


})
export class PonyRacerAppComponent {
    //numberOfUsers: number = 146;
    constructor(private raceService: RaceService) {

    }

    list(){

        return this.raceService.list()[0].name;

    }
}
