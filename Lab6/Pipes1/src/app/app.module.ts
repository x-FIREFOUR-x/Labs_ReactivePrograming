import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormatPipe} from './format.pipe';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, FormatPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }