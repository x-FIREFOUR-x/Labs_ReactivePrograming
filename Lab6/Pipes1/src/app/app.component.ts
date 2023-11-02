import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>Без форматування: {{myDate}}</div>
                <div>З форматуванням: {{myDate | date}}</div>`
})

export class AppComponent {
    myDate = new Date(1961, 3, 12);
}