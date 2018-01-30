import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { FormComponentService } from './../form-component.service';
import { BaseChildFormComponent } from '../base-child-form.component';

@Component({
    selector: 'child-form-a',
    templateUrl: './child-form-a.component.html'
})
export class ChildFormAComponent extends BaseChildFormComponent implements OnInit, OnDestroy {

    public name: string = 'child-form-a';

    public ngOnInit(): void {
        this.form = this.fb.group({
            hideGrandchild: [ false ],
            control1: [ '', [ Validators.required ]],
            control2: [ 'test2', [ Validators.required ]]
        });
        super.ngOnInit();
    }

}
