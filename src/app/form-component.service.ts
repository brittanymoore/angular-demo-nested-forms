import { AbstractControl } from '@angular/forms/src/model';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { ControlData } from './control-data.class';

export class FormComponentService {

    private controlAddSource: Subject<ControlData> = new Subject<ControlData>();
    private controlRemoveSource: Subject<string> = new Subject<string>();

    public controlAdd$: Observable<ControlData> = this.controlAddSource.asObservable();
    public controlRemove$: Observable<string> = this.controlRemoveSource.asObservable();

    public addControl(name: string, control: AbstractControl) {
        this.controlAddSource.next(new ControlData(name, control));
    }

    public removeControl(name: string) {
        this.controlRemoveSource.next(name);
    }

}
