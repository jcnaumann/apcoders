import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InquilinoListComponent } from './inquilinos/inquilino-list/inquilino-list.component';
import { CreateInquilinoComponent } from './inquilinos/create-inquilino/create-inquilino.component';
import { UpdateInquilinoComponent } from './inquilinos/update-inquilino/update-inquilino.component';
import { InquilinoDetailsComponent } from './inquilinos/inquilino-details/inquilino-details.component';

import { DespesaListComponent } from './despesas/despesa-list/despesa-list.component';
import { CreateDespesaComponent } from './despesas/create-despesa/create-despesa.component';
import { UpdateDespesaComponent } from './despesas/update-despesa/update-despesa.component';
import { DespesaDetailsComponent } from './despesas/despesa-details/despesa-details.component';

import { UnidadeListComponent } from './unidades/unidade-list/unidade-list.component';
import { CreateUnidadeComponent } from './unidades/create-unidade/create-unidade.component';
import { UpdateUnidadeComponent } from './unidades/update-unidade/update-unidade.component';
import { UnidadeDetailsComponent } from './unidades/unidade-details/unidade-details.component';

const routes: Routes = [
  
  {path: 'inquilinos', component: InquilinoListComponent},
  {path: 'create-inquilino', component: CreateInquilinoComponent},
  {path: '', redirectTo: 'inquilinos', pathMatch: 'full'},
  {path: 'update-inquilino/:id', component: UpdateInquilinoComponent},
  {path: 'inquilino-details/:id', component: InquilinoDetailsComponent},

  {path: 'despesas', component: DespesaListComponent},
  {path: 'create-despesa', component: CreateDespesaComponent},
  {path: '', redirectTo: 'despesas', pathMatch: 'full'},
  {path: 'update-despesa/:id', component: UpdateDespesaComponent},
  {path: 'despesa-details/:id', component: DespesaDetailsComponent},

  {path: 'unidades', component: UnidadeListComponent},
  {path: 'create-unidade', component: CreateUnidadeComponent},
  {path: '', redirectTo: 'unidades', pathMatch: 'full'},
  {path: 'update-unidade/:id', component: UpdateUnidadeComponent},
  {path: 'unidade-details/:id', component: UnidadeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
