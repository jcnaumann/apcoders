import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateInquilinoComponent } from './create-inquilino/create-inquilino.component';
import { UpdateInquilinoComponent } from './update-inquilino/update-inquilino.component';
import { InquilinoDetailsComponent } from './inquilino-details/inquilino-details.component';
import { InquilinoListComponent } from './inquilino-list/inquilino-list.component';
import { InquilinoComponent } from './inquilino/inquilino.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateInquilinoComponent,
    UpdateInquilinoComponent,
    InquilinoDetailsComponent,
    InquilinoListComponent,
    InquilinoComponent
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
