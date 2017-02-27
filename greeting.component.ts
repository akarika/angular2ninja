import {Component} from '@angular/core';

@Component({
    selector: 'ns-gretting',
    template: '<div>{{asyncGretting | async}}</div>'

})

export class AsyncGrettingComponent {
    asyncGretting = new Promise(
        (resolve) => {
            window.setTimeout(() => resolve('hello'), 1000)
        }

    )
}
