import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { FormComponentService } from './../form-component.service';

@Component({
    selector: 'child-form-b',
    templateUrl: './child-form-b.component.html'
})
export class ChildFormBComponent implements OnInit, OnDestroy {

    public form: FormGroup;
    public name: string = 'child-form-b';
    @Input() public parent: string;

    constructor(private fb: FormBuilder, private componentService: FormComponentService) {}

    public ngOnInit(): void {
        if (!this.parent) {
            throw new Error('Child form must receive parent value.');
        }
        this.form = this.fb.group({
            control3: [ 'test3', [ Validators.required ]],
            control4: [ 'test4', [ Validators.required ]]
        });
        this.componentService.addControl(this.name, this.form, this.parent);
    }

    public ngOnDestroy(): void {
        this.componentService.removeControl(this.name, this.parent);
    }

}
