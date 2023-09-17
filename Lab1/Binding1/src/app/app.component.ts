import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: ` <table border="1">
                <tr><td [attr.colspan]="colspan">One-Two</td></tr>
                <tr><td>Three</td><td>Four</td></tr>
                <tr><td>Five</td><td>Six</td></tr>
                </table>`
})
export class AppComponent {
    name = "Tom";
    age = 25;
    colspan = 2;
}
