import {Component} from '@angular/core';
import {<%= classify(name) %>Service} from './<%= dasherize(name) %>.service';
import {FormBuilder} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Delete<%= classify(name) %>ModalComponent} from './components/delete-<%= dasherize(name) %>-modal/delete-<%= dasherize(name) %>-modal.component';
import {Edit<%= classify(name) %>ModalComponent} from './components/edit-<%= dasherize(name) %>-modal/edit-<%= dasherize(name) %>-modal.component';
import {BaseCrudPagesComponent} from 'angular-alur-kerja-lib';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component extends BaseCrudPagesComponent {
    constructor(
        public tableService: <%= classify(name) %>Service,
        protected fb: FormBuilder,
        private modalService: NgbModal,
    ) {
        super(tableService, fb);
    }

    create() {
        this.edit(undefined);
    }

    edit(id: number, type: string = 'edit') {
        const modalRef = this.modalService.open(Edit<%= classify(name) %>ModalComponent, { size: 'xl' });
        modalRef.componentInstance.id = id;
        modalRef.componentInstance.title = '<%= classify(name) %>';
        // OVERRIDE this transFormArrForm with your array object, if u want to custom, not from BE
        const transFormArrForm = this.arrFormGroups.map((el) => {
            return {
                title: el.label,
                form: el.name,
                type: el.type,
                mandatory: el.required
            };
        });
        modalRef.componentInstance.arrFormGroup = transFormArrForm;
        if (type !== 'edit') {
            // Show View
            modalRef.componentInstance.show = true;
        }
        modalRef.result.then(() =>
                this.tableService.fetch(),
            () => { }
        );
    }

    delete(id: number) {
        const modalRef = this.modalService.open(Delete<%= classify(name) %>ModalComponent);
        modalRef.componentInstance.id = id;
        modalRef.componentInstance.title = '<%= classify(name) %>';
        modalRef.result.then(() => this.tableService.fetch(), () => {});
    }

    filterForm() {
        // DEFAULT FILTER FORM ID, U CAN ADD MORE
        this.filterGroup = this.fb.group({
            id: ['']
        });
        this.subscriptions.push(
            this.filterGroup.controls.id.valueChanges.subscribe(() =>
                this.filter()
            )
        );
    }

    filter() {
        // DEFAULT FILTER BY ID, U CAN ADD MORE
        const filter = {};
        const id = this.filterGroup.get('id').value;
        if (id) {
            filter['id'] = id;
        }
        this.tableService.patchState({ filter });
    }

    getForms() {
        this.tableService.getFormArr().subscribe(
            (result: any) => {
                this.arrFormGroups = [...result.data];
            },
        );
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.getForms();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

}
