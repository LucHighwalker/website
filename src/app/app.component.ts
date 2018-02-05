import {Component} from '@angular/core';

import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('enterBG', [
            transition('void => *', [
                animate(750, keyframes([
                    style({opacity: 0, offset: 0}),
                    style({opacity: 0.25, offset: 1}),
                ]))
            ])
        ])
    ]
})
export class AppComponent {
    title = 'app';
}
