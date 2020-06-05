import { ClientProfileUiPersonalDataModule } from '@qro/client/profile/ui-personal-data';
import { MyClientDataResolver, ClientDomainModule } from '@qro/client/domain';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUiMaterialModule } from '@qro/shared/ui-material';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    pathMatch: 'full',
    resolve: {
      clientData: MyClientDataResolver,
    },
  },
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    SharedUiMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ClientDomainModule,
    ClientProfileUiPersonalDataModule,
  ],
})
export class ClientProfileModule {}
