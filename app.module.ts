import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PonyRacerAppComponent} from './app.component';


import {RacesComponent} from './races.component';
import {PoniesComponent} from './ponies.component';
import {ApiService} from './api.service';
import {FakeRaceService} from './fake.service';
import {RaceService} from './race.service'



//objet de configuration
@NgModule({
    imports:[BrowserModule],
    //declaration des modules d utilisation
    declarations:[PonyRacerAppComponent],
    //sur quel component booter
    providers:[ApiService,{ provide: RaceService, useClass: FakeRaceService }],
    bootstrap:[PonyRacerAppComponent]
})

export class AppModule{

}