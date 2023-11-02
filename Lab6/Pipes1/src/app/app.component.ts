import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>Без форматування: {{myDate}}</div>
                <div>З форматуванням: {{myDate | date}}</div>
                <div>{{welcome | uppercase}}</div>
                <div>{{welcome | lowercase}}</div>
                <div>{{persentage | percent}}</div>
                <div>{{persentage | currency}}</div>`
})

export class AppComponent {
    myDate = new Date(1961, 3, 12);
    welcome: string = "Hello World!";
    persentage: number = 0.14; 
}