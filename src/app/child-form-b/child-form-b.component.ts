import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { FormComponentService } from './../form-component.service';
import { BaseChildFormComponent } from '../base-child-form.component';

@Component({
    selector: 'child-form-b',
    templateUrl: './child-form-b.component.html'
})
export class ChildFormBComponent extends BaseChildFormComponent implements OnInit, OnDestroy {

    public name: string = 'child-form-b';

    public ngOnInit(): void {
        this.form = this.fb.group({
            control3: [ 'test3', [ Validators.required ]],
            control4: [ 'test4', [ Validators.required ]]
        });
        super.ngOnInit();
    }

}
