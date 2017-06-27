import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { SubformABuilder } from './subform-a/subform-a.form-builder';
import { SubformBBuilder } from './subform-b/subform-b.form-builder';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    public myForm: FormGroup;

    constructor(private fb: FormBuilder) { }

    public ngOnInit(): void {
        this.myForm = this.fb.group({
            subformA: this.fb.group(SubformABuilder),
            subformB: this.fb.group(SubformBBuilder)
        });
    }

    public onSubmit(): void {
        console.log(this.myForm.value);
    }

}
