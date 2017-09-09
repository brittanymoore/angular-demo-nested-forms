import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { FormComponentService } from './../form-component.service';

@Component({
    selector: 'child-form-b',
    templateUrl: './child-form-b.component.html'
})
export class ChildFormBComponent implements OnInit, OnDestroy {

    public form: FormGroup;

    constructor(private fb: FormBuilder, private componentService: FormComponentService) {}

    public ngOnInit(): void {
        this.form = this.fb.group({
            control3: [ 'test3', [ Validators.required ]],
            control4: [ 'test4', [ Validators.required ]]
        });
        this.componentService.addControl('child-form-b', this.form);
    }

    public ngOnDestroy(): void {
        this.componentService.removeControl('child-form-b');
    }

}
