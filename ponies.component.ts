import {Component} from '@angular/core';

@Component({
    selector:'ns-ponies',
    template:`
<button (click)="refreshPonies()">Rafraichir</button>
<ul>
<li *ngFor="let ponie of ponies;let isEven =even"
[style.color]="isEven?'green':'black'">
{{ponie.name}}</li>
</ul>

`

})

export class PoniesComponent{

    ponies: Array<any> = [{ name: 'Rainbow Dash' }, { name: 'Pinkie Pie' }];

    refreshPonies(){
        this.ponies = [{ name: 'Fluttershy' }, { name: 'Rarity' }];
    }

}