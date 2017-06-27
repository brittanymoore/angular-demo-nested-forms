import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'subform-b',
    templateUrl: './subform-b.component.html'
})
export class SubformBComponent {

    @Input() group: FormGroup;

}
