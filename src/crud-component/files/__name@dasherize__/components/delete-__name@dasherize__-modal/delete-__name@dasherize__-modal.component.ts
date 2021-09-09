import { Component } from '@angular/core';
import {BaseDeletePagesComponent} from 'angular-alur-kerja-lib';
import {<%= classify(name) %>Service} from '../../<%= dasherize(name) %>.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-delete-<%= dasherize(name) %>-modal',
    templateUrl: './delete-<%= dasherize(name) %>-modal.component.html',
    styleUrls: ['./delete-<%= dasherize(name) %>-modal.component.scss'],
})

export class Delete<%= classify(name) %>ModalComponent extends BaseDeletePagesComponent {
    constructor(
        public tableService: <%= classify(name) %>Service,
        public modal: NgbActiveModal
    ) {
        super(tableService, modal);
    }
}
