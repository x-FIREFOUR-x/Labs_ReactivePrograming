import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<label>Введіть ім'я:</label>
                <input [(ngModel)]="name" placeholder="name">
                <h1>Ласкаво просимо {{name}}!</h1>
                
                <h2>Hello Angular</h2>
                <p>Angular 16 представляє модульну архітектуру додатку</p>`,
    styles: [` 
                h2,h3{color:navy;}
                p{font-size:13px; font-family:Verdana;}
                
                h1, h2{color:navy;}
                p{font-size:13px;}
                :host {
                    font-family: Verdana;
                    color: #555;
                }
            `]

})
export class AppComponent {
    name = '';
}