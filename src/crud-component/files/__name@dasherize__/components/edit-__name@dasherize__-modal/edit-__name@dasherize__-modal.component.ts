import { Component } from '@angular/core';
import {<%= classify(name) %>Service} from '../../<%= dasherize(name) %>.service';
import {FormBuilder, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {BaseEditPagesComponent} from 'angular-alur-kerja-lib';

@Component({
    selector: 'app-edit-<%= dasherize(name) %>-modal',
    templateUrl: './edit-<%= dasherize(name) %>-modal.component.html',
    styleUrls: ['./edit-<%= dasherize(name) %>-modal.component.scss'],
})

export class Edit<%= classify(name) %>ModalComponent extends BaseEditPagesComponent {
    arrNameOfForm: any[] = [];

    constructor(
        protected templateService: <%= classify(name) %>Service,
        protected fb: FormBuilder,
        public modal: NgbActiveModal
    ) {
        super(templateService, fb, modal);
    }

    loadForm() {
    //    OVERRIDE THIS
    //    AUTOMATICALLY GENERATE
        this.arrNameOfForm = this.arrFormGroup.map((el) => {
            return el.form;
        });
        for (const key of this.arrNameOfForm) {
            this.EMPTY_OBJ[key] = key;
        }
        let objFormGroup = new Object();
        this.arrNameOfForm.forEach((el) => {
            objFormGroup[el] = [this.formObj[el], Validators.compose([Validators.required])];
        });
        this.formGroup = this.fb.group(objFormGroup);
    }

    prepareFormData() {
    //    OVERRIDE THIS
    }

    prepareFormEdit() {
    //    OVERRIDE THIS
    }
}
