import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {<%= classify(name) %>Component} from './<%= dasherize(name) %>.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {ReactiveFormsModule} from '@angular/forms';
import {Delete<%= classify(name) %>ModalComponent} from './components/delete-<%= dasherize(name) %>-modal/delete-<%= dasherize(name) %>-modal.component';
import {NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CustomAdapter, CustomDateParserFormatter} from '../../_metronic/core';
import {Edit<%= classify(name) %>ModalComponent} from './components/edit-<%= dasherize(name) %>-modal/edit-<%= dasherize(name) %>-modal.component';
import {CrudModule, CRUDTableModule} from 'angular-alur-kerja-lib';

@NgModule({
    declarations: [<%= classify(name) %>Component, Delete<%= classify(name) %>ModalComponent, Edit<%= classify(name) %>ModalComponent],
    entryComponents: [Delete<%= classify(name) %>ModalComponent, Edit<%= classify(name) %>ModalComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: <%= classify(name) %>Component,
            },
        ]),
        InlineSVGModule,
        CRUDTableModule,
        ReactiveFormsModule,
        NgbModule,
        NgbDatepickerModule,
        CrudModule,
    ],
    providers: [
        {
            provide: NgbDateAdapter,
            useClass: CustomAdapter
        },
        {
            provide: NgbDateParserFormatter,
            useClass: CustomDateParserFormatter
        }
    ],
})
export class <%= classify(name) %>Module {}
