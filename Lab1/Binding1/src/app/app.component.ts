import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: ` <input type="text" [value]="name" />
                <input type="text" [value]="age" />
                <p [textContent]="name"></p>`
})
export class AppComponent {
    name = "Tom";
    age = 25;
}
