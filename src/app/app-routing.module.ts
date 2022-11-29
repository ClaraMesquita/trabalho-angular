import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AddContatoComponent } from './componentes/add-contato/add-contato.component';
import { ListRenderComponent } from './componentes/list-render/list-render.component';
import { DetalhesContatoComponent } from './componentes/detalhes-contato/detalhes-contato.component';
import { EditContatoComponent } from './componentes/edit-contato/edit-contato.component';
import { InstrucaoComponent } from './componentes/instrucao/instrucao.component';

const routes: Routes = [
{path: 'add-contato', component: AddContatoComponent},
{path: '', component: HomeComponent},
{path: 'list', component: ListRenderComponent},
{path: 'list/:id', component: DetalhesContatoComponent},
{path: 'edit-contato/:id', component: EditContatoComponent},
{path: 'instrucao', component:InstrucaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
