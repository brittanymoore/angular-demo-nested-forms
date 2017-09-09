import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormComponentService } from './../form-component.service';

@Component({
    selector: 'child-form-a',
    templateUrl: './child-form-a.component.html'
})
export class ChildFormAComponent implements OnInit, OnDestroy {

    @Input() public parentForm: FormGroup;

    public form: FormGroup;

    constructor(private fb: FormBuilder, private componentService: FormComponentService) {}

    public ngOnInit(): void {
        this.form = this.fb.group({
            control1: [ '', [ Validators.required ]],
            control2: [ 'test2', [ Validators.required ]]
        });
        this.componentService.addControl('child-form-a', this.form);
    }

    public ngOnDestroy(): void {
        this.componentService.removeControl('child-form-a');
    }

}
