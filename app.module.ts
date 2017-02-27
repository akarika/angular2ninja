import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PonyRacerAppComponent} from './app.component';
import{JsonPipe} from '@angular/common';


import {RacesComponent} from './races.component';
import {PoniesComponent} from './ponies.component';
import {ApiService} from './api.service';
import {FakeRaceService} from './fake.service';
import {RaceService} from './race.service'
import {AsyncGrettingComponent} from './greeting.component'
import {FromNowPipe} from "./pipe.transform";



//objet de configuration
@NgModule({
    imports:[BrowserModule],
    //declaration des modules d utilisation
    declarations:[PonyRacerAppComponent,PoniesComponent,AsyncGrettingComponent,FromNowPipe],
    //sur quel component booter
    providers:[ApiService,{ provide: RaceService, useClass: FakeRaceService },JsonPipe],
    bootstrap:[PonyRacerAppComponent]
})

export class AppModule{

}