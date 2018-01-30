import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { FormComponentService } from './../form-component.service';
import { BaseChildFormComponent } from '../base-child-form.component';

@Component({
    selector: 'grandchild-form-a',
    templateUrl: './grandchild-form-a.component.html'
})
export class GrandchildFormComponent extends BaseChildFormComponent implements OnInit, OnDestroy {

    public name: string = 'grandchild-form-a';

    public ngOnInit(): void {
        this.form = this.fb.group({
            control5: [ '', [ Validators.required ]]
        });
        super.ngOnInit();
    }

}
