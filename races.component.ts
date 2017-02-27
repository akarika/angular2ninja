import{Component} from '@angular/core';

@Component({
    selector:'ns-races',
    template:`
<h2>Races</h2>
<button (click)="refresRaces()">Rafraichir la course</button>
<p>{{races.length}} races</p>
<input type="text" #name>
<button (click)="name.focus()">Focus the input</button>

<div *ngIf="races.length > 0">

<h2>Races</h2>
<ul>
<li [ngStyle]="{color: color,fontSize:fz1}" *ngFor="let race of races;let i=index" >{{i}}-{{race.name}}</li>
</ul>
</div>

`



})

export class RacesComponent{
    /*races:Array<any> = [];*/

    /*refresRaces(){
        this.races = [{name:'London'},{name:'Rennes'}]
    }
*/
races:Array<any> = [{name:'London'},{name:'Rennes'}];

public color="red";
public fz1 ="24px";


}