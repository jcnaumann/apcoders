import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateInquilinoComponent } from './inquilinos/create-inquilino/create-inquilino.component';
import { UpdateInquilinoComponent } from './inquilinos/update-inquilino/update-inquilino.component';
import { InquilinoDetailsComponent } from './inquilinos/inquilino-details/inquilino-details.component';
import { InquilinoListComponent } from './inquilinos/inquilino-list/inquilino-list.component';
import { InquilinoComponent } from './inquilinos/inquilino/inquilino.component';

import { FormsModule} from '@angular/forms';

import { CreateDespesaComponent } from './despesas/create-despesa/create-despesa.component';
import { UpdateDespesaComponent } from './despesas/update-despesa/update-despesa.component';
import { DespesaDetailsComponent } from './despesas/despesa-details/despesa-details.component';
import { DespesaListComponent } from './despesas/despesa-list/despesa-list.component';
import { DespesaComponent } from './despesas/despesa/despesa.component';

import { CreateUnidadeComponent } from './unidades/create-unidade/create-unidade.component';
import { UpdateUnidadeComponent } from './unidades/update-unidade/update-unidade.component';
import { UnidadeDetailsComponent } from './unidades/unidade-details/unidade-details.component';
import { UnidadeListComponent } from './unidades/unidade-list/unidade-list.component';

@NgModule({
  declarations: [
    AppComponent,

    CreateInquilinoComponent,
    UpdateInquilinoComponent,
    InquilinoDetailsComponent,
    InquilinoListComponent,
    InquilinoComponent,

    CreateDespesaComponent,
    UpdateDespesaComponent,
    DespesaDetailsComponent,
    DespesaListComponent,
    DespesaComponent,

    CreateUnidadeComponent,
    UpdateUnidadeComponent,
    UnidadeDetailsComponent,
    UnidadeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
