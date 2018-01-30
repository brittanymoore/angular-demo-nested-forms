import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ParentFormComponent } from './parent-form/parent-form.component';
import { ChildFormAComponent } from './child-form-a/child-form-a.component';
import { ChildFormBComponent } from './child-form-b/child-form-b.component';
import { GrandchildFormComponent } from './grandchild-form-a/grandchild-form-a.component';
import { BaseChildFormComponent } from './base-child-form.component';

import { FormComponentService } from './form-component.service';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        BaseChildFormComponent,
        ParentFormComponent,
        ChildFormAComponent,
        ChildFormBComponent,
        GrandchildFormComponent
    ],
    providers: [ FormComponentService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
