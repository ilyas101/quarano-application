import { HealthDepartmentUiActionAlertModule } from '@qro/health-department/ui-action-alert';
import { SharedUiMaterialModule } from '@qro/shared/ui-material';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionListComponent } from './action-list/action-list.component';
import { CaseListComponent } from './case-list/case-list.component';
import { ContactCasesComponent } from './contact-cases/contact-cases.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {
  HealthDepartmentDomainModule,
  ContactCaseActionListResolver,
  ContactCaseCaseListResolver,
} from '@qro/health-department/domain';

const routes: Routes = [
  {
    path: '',
    component: ContactCasesComponent,
    children: [
      {
        path: '',
        redirectTo: 'case-list',
        pathMatch: 'full',
      },
      {
        path: 'action-list',
        pathMatch: 'full',
        component: ActionListComponent,
        resolve: { actions: ContactCaseActionListResolver },
      },
      {
        path: 'case-list',
        pathMatch: 'full',
        component: CaseListComponent,
        resolve: { cases: ContactCaseCaseListResolver },
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedUiMaterialModule,
    NgxDatatableModule,
    HealthDepartmentUiActionAlertModule,
    HealthDepartmentDomainModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ActionListComponent, CaseListComponent, ContactCasesComponent],
})
export class HealthDepartmentFeatureContactCasesModule {}
