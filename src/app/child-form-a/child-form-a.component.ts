import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { FormComponentService } from './../form-component.service';

@Component({
    selector: 'child-form-a',
    templateUrl: './child-form-a.component.html'
})
export class ChildFormAComponent implements OnInit, OnDestroy {

    public form: FormGroup;
    public name: string = 'child-form-a';
    @Input() public parent: string;

    constructor(private fb: FormBuilder, private componentService: FormComponentService) {}

    public ngOnInit(): void {
        if (!this.parent) {
            throw new Error('Child form must receive parent value.');
        }
        this.form = this.fb.group({
            hideGrandchild: [ false ],
            control1: [ '', [ Validators.required ]],
            control2: [ 'test2', [ Validators.required ]]
        });
        this.componentService.addControl(this.name, this.form, this.parent);
    }

    public ngOnDestroy(): void {
        this.componentService.removeControl(this.name, this.parent);
    }

}
