import { Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<ng-content></ng-content> 
                <p>Привіт {{name}}</p>`,
    styles: [`h2, p {color:red;}`]
})
export class ChildComponent {
    name = "Тарас";
}