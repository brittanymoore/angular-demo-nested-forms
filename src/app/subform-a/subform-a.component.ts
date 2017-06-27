import { FormGroup, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'subform-a',
    templateUrl: './subform-a.component.html'
})
export class SubformAComponent {

    @Input() group: FormGroup;
    @Input() showButtons: boolean;

    public onSave(): void {
        console.log(this.group.value);
    }

}
