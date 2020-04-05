import { ContactPersonsResolver } from './../resolvers/contact-persons.resolver';
import { ContactPersonComponent } from './contact-person/contact-person.component';
import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPersonResolver } from '../resolvers/contact-person.resolver';
import { PreventUnsavedChangesGuard } from '../guards/prevent-unsaved-changes.guard';



const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    resolve: { contacts: ContactPersonsResolver }
  },
  {
    path: 'edit/:id',
    component: ContactPersonComponent,
    resolve: { contactPerson: ContactPersonResolver },
    canDeactivate: [PreventUnsavedChangesGuard]
  },
  {
    path: 'new',
    component: ContactPersonComponent,
    resolve: { contactPerson: ContactPersonResolver },
    canDeactivate: [PreventUnsavedChangesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
