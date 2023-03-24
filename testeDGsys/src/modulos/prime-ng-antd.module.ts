import { NgModule } from "@angular/core";

import { TableModule } from 'primeng/table';
import { ButtonModule } from "primeng/button";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CardModule } from 'primeng/card';

@NgModule({
  exports: [
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    TabViewModule,
    ToastModule,
    InputTextModule,
    InputMaskModule,
    ToggleButtonModule,
    CardModule,
  ],
})
export class PrimeNgAntdModule { }
