import { PrimeNgAntdModule } from './prime-ng-antd.module';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    ReactiveFormsModule,
    FormsModule,
    PrimeNgAntdModule
  ]
})
export class CrudModule { }
