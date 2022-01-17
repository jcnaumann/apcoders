import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InquilinoListComponent } from './inquilino-list/inquilino-list.component';
import { CreateInquilinoComponent } from './create-inquilino/create-inquilino.component';
import { UpdateInquilinoComponent } from './update-inquilino/update-inquilino.component';
import { InquilinoDetailsComponent } from './inquilino-details/inquilino-details.component';


const routes: Routes = [
  {path: 'inquilinos', component: InquilinoListComponent},
  {path: 'create-inquilino', component: CreateInquilinoComponent},
  {path: '', redirectTo: 'inquilinos', pathMatch: 'full'},
  {path: 'update-inquilino/:id', component: UpdateInquilinoComponent},
  {path: 'inquilino-details/:id', component: InquilinoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
