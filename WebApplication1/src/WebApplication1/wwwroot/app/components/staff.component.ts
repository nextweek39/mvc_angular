import {Component} from 'angular2/core';
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common';


@Component({
    templateUrl: "app/components/staff.component.html",
})

export class StaffComponent {
    addUser: ControlGroup;

    constructor(fb: FormBuilder) {
        this.addUser = fb.group({
            name: ['', Validators.required]
        })
    }
}