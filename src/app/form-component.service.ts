import { AbstractControl, FormGroup } from '@angular/forms';

export class FormComponentService {

    private forms: any = {};
    private cachedData: any = {};

    public registerRootForm(form: FormGroup, name: string): void {
        this.forms[name] = form;
        this.cachedData[name] = {};
    }

    public addControl(name: string, control: FormGroup, parent: string): void {
        this.forms[name] = control;
        this.forms[parent].addControl(name, control as AbstractControl);
        if (!this.cachedData[name]) {
            this.cachedData[name] = {};
        }
        this.forms[name].patchValue(this.cachedData[name]);
    }

    public removeControl(name: string, parent: string): void {
        this.cachedData[name] = this.forms[name].value;
        this.forms[parent].removeControl(name);
        this.forms[name] = null;
    }

}
