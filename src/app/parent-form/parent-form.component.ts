import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { FormComponentService } from './../form-component.service';
import { ControlData } from './../control-data.class';

@Component({
    selector: 'parent-form',
    templateUrl: './parent-form.component.html',
    providers: [ FormComponentService ]
})
export class ParentFormComponent implements OnInit, OnDestroy {

    public myForm: FormGroup;

    private addControlSubscription: Subscription;
    private removeControlSubscription: Subscription;

    private cachedData: any = {};

    constructor(
        private fb: FormBuilder,
        private componentService: FormComponentService) { }

    public ngOnInit(): void {
        this.myForm = this.fb.group({
            hideA: [false]
        });
        this.subscribeToAdd();
        this.subscribeToRemove();
    }

    public ngOnDestroy(): void {
        this.addControlSubscription.unsubscribe();
        this.removeControlSubscription.unsubscribe();
    }

    public onSubmit(): void {
        console.log(this.myForm.value);
    }

    private subscribeToAdd() {
        this.addControlSubscription = this.componentService.controlAdd$
            .subscribe((data: ControlData) => {
                this.myForm.addControl(data.name, data.control);
                this.myForm.patchValue(this.cachedData);
            });
    }

    private subscribeToRemove() {
        this.removeControlSubscription = this.componentService.controlRemove$
            .subscribe((name: string) => {
                this.cachedData[name] = this.myForm.value[name];
                this.myForm.removeControl(name);
            });
    }

}
