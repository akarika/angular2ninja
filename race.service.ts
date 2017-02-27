import {ApiService} from'./api.service';
import {Injectable} from "@angular/core";
import {FakeRaceService} from './fake.service';
@Injectable()

export class RaceService{


    constructor(private apiService:ApiService){

    }
    list(){
        return this.apiService.get('/races');
    }

}