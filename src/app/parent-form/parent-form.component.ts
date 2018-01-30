import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { FormComponentService } from './../form-component.service';

@Component({
    selector: 'parent-form',
    templateUrl: './parent-form.component.html',
    providers: [ FormComponentService ]
})
export class ParentFormComponent implements OnInit {

    public myForm: FormGroup;
    public name: string = 'root';

    constructor(
        private fb: FormBuilder,
        private componentService: FormComponentService) { }

    public ngOnInit(): void {
        this.myForm = this.fb.group({
            hideA: [false]
        });
        this.componentService.registerRootForm(this.myForm, this.name);
    }

    public onSubmit(): void {
        console.log(this.myForm.value);
    }

}
