import { Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<h2>Ласкаво просимо {{name}}!</h2>`,
    styles: [`h2, p {color:red;}`]
})
export class ChildComponent {
    name = "Тарас";
}