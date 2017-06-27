import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubformAComponent } from './subform-a/subform-a.component';
import { SubformBComponent } from './subform-b/subform-b.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        SubformAComponent,
        SubformBComponent
    ],
    providers: [ ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
