import { Component } from '@angular/core';
// you need to import the pipe you want to use
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'ns-ponies',
    template: `<p>{{poniesAsJson}}</p>
<p>{{ 'Ninja Squad' | slice:0:size }}</p>
<div *ngFor="let pony of ponies | slice:0:2">{{pony.name}}</div>
<p>{{ 'Ninja Squad' | uppercase }}</p>
<p>{{ 'Ninja Squad' | lowercase }}</p>
<p>{{1983 | number :'.2'}}</p>
<p>{{ 10.6 | currency:'EUR' }}</p>
<!-- will display 'EUR10.60' -->
<p>{{ 10.6 | currency:'USD':true }}</p>
<!-- will display '$10.60' -->
<p>{{ 10.6 | currency:"EUR":true:".2" }}</p>
<p>{{ birthday | fromNow}}</p>

`
})
export class PoniesComponent {
    size:number = 2;
    birthday:any = new Date();

    ponies: Array<any> = [
        { name: 'Rainbow Dash' },
        { name: 'Pinkie Pie' },
        { name: 'Fluttershy' }
    ];
    poniesAsJson: string;
// inject the Pipe you want
    constructor(jsonPipe: JsonPipe) {
        // and then call the transform method on it
        this.poniesAsJson = jsonPipe.transform(this.ponies);
    }



}