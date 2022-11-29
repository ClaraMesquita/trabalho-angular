import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContatoComponent } from './componentes/add-contato/add-contato.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListRenderComponent } from './componentes/list-render/list-render.component';
import { DetalhesContatoComponent } from './componentes/detalhes-contato/detalhes-contato.component';
import { EditContatoComponent } from './componentes/edit-contato/edit-contato.component';
import { InstrucaoComponent } from './componentes/instrucao/instrucao.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContatoComponent,
    HomeComponent,
    ListRenderComponent,
    DetalhesContatoComponent,
    EditContatoComponent,
    InstrucaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
