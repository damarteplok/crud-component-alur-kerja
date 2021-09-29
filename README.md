# Readme

## Install Latest
- `npm i crud-component-alur-kerja`

## Create CRUD Command
- ng g crud-component-alur-kerja:crud-component --name=<nama_collection_bpmn> --path=src/app/pages(metronic path) untuk melakukan generate otamatis
- contoh `ng g crud-component-alur-kerja:crud-component --name=organization --path=src/app/pages`
- setelah itu masuk ke folder src/app/pages/organization
- sesuaikan beberapa konfigurasi
- masuk ke organization.service.ts, edit dan sesuaikan bagian variable API_URL
- contoh `API_URL = '${environment.apiUrl}/crud/organization'`;
- edit dan sesuaikan header (jika API nya menggunakan bearer token)
- contoh `myHeader = getAWSHeaders(localStorage.getItem('id_token'))`
- edit dan sesuaikan `function filterForm() dan filter()` utk menambah filter pencarian, secara default pencarian nya menggunakan id
- comment `function getForms()` pada `ngOnInit()` jika tidak ingin menggunakan manual form bukan mengambil dari BE
- jika ingin menambah pada tabel nya, bisa edit dan sesuaikan pada file `organization.component.html`
- jika ingin menambah sorting pada tabel gunakan code ini, taruh code ini di dalam th nya `<app-sort-icon column="<paramater_di_be_nya>" [activeColumn]="sorting.column" [activeDirection]="sorting.direction" (sort)="sort($event)"></app-sort-icon>`
- jika ingin memakai form manual tanpa dari BE, cukup edit `const transFormArrForm` dengan format array object, seperti berikut:
```sh
[
    {
        title: 'Nama',
        form: 'name',
        type: 'text',
        mandatory: true
    }
]
```
- edit dan sesuaikan `function prepareFormData() dan prepareFormEdit()` pada file src/app/pages/organization/component/edit-organization-modal.component.ts, kedua function tsb berfungsi sebagai payload json object utk dikirim ke BE, sesuaikan dengan kebutuhan BE, contoh seperti berikut:
```sh
    prepareFormData() {
        //    OVERRIDE THIS
        const formData = this.formGroup.value;
        this.formObj.name = formData.name;
        this.formObj.code = formData.code;
    }

    prepareFormEdit() {
        //    OVERRIDE THIS
        const formData = this.formGroup.value;
        return {
            name: formData.name,
            code: formData.code,
        };
    }
```

## Create BPMN Command

- ng g crud-component-alur-kerja:bpmn-component --name=<nama_collection_bpmn> --path=src/app/pages(metronic path) untuk melakukan generate otamatis
- contoh `ng g crud-component-alur-kerja:crud-component --name=single-approval --path=src/app/pages`
- setelah itu masuk ke folder src/app/pages/single-approval
- sesuaikan beberapa konfigurasi
- masuk ke organization.service.ts, edit dan sesuaikan bagian variable API_URL
- contoh `API_URL = '${environment.apiUrl}/crud/singleApproval'`;
- edit dan sesuaikan header (jika API nya menggunakan bearer token)
- contoh `myHeader = getAWSHeaders(localStorage.getItem('id_token'))`
- edit dan sesuaikan `function filterForm() dan filter()` utk menambah filter pencarian, secara default pencarian nya menggunakan id
- untuk saat ini customization di bpmn cuman segitu saja...
