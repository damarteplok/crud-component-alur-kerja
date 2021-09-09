import { Component } from '@angular/core';
import {<%= classify(name) %>Service} from '../../<%= dasherize(name) %>.service';
import {FormBuilder} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {BaseBpmnEditPagesComponent} from 'angular-alur-kerja-lib';

@Component({
    selector: 'app-edit-<%= dasherize(name) %>-modal',
    templateUrl: './edit-<%= dasherize(name) %>-modal.component.html',
    styleUrls: ['./edit-<%= dasherize(name) %>-modal.component.scss'],
})

export class Edit<%= classify(name) %>ModalComponent extends BaseBpmnEditPagesComponent {
    EMPTY_OBJ = {
        model: {},
        logs: []
    };

    constructor(
        protected templateService: <%= classify(name) %>Service,
        protected fb: FormBuilder,
        public modal: NgbActiveModal
    ) {
        super(templateService, fb, modal);
    }
}
