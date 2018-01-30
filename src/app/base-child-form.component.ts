import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { FormComponentService } from './form-component.service';

@Component({
    template: ''
})
export class BaseChildFormComponent implements OnInit, OnDestroy {

    public form: FormGroup;
    public name: string;
    @Input() public parent: string;

    constructor(protected fb: FormBuilder, private componentService: FormComponentService) {}

    public ngOnInit(): void {
        if (!this.parent) {
            throw new Error('Child form must receive parent value.');
        }
        this.componentService.addControl(this.name, this.form, this.parent);
    }

    public ngOnDestroy(): void {
        this.componentService.removeControl(this.name, this.parent);
    }

}