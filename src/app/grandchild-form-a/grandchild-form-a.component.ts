import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { FormComponentService } from './../form-component.service';

@Component({
    selector: 'grandchild-form-a',
    templateUrl: './grandchild-form-a.component.html'
})
export class GrandchildFormComponent implements OnInit, OnDestroy {

    public form: FormGroup;
    public name: string = 'grandchild-form-a';
    @Input() public parent: string;

    constructor(private fb: FormBuilder, private componentService: FormComponentService) {}

    public ngOnInit(): void {
        if (!this.parent) {
            throw new Error('Child form must receive parent value.');
        }
        this.form = this.fb.group({
            control5: [ '', [ Validators.required ]]
        });
        this.componentService.addControl(this.name, this.form, this.parent);
    }

    public ngOnDestroy(): void {
        this.componentService.removeControl(this.name, this.parent);
    }

}
