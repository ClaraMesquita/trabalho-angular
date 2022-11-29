import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/Contato';
import { ListService } from 'src/app/servicos/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  contatos: Contato[] = [];
  mostrar = true;
  constructor(private listService: ListService) {
    this.getContato();
   }
  ngOnInit(): void {
  }

  removeContato(contato: Contato) {
    // Remove o Animal do front-end
    this.contatos = this.contatos.filter((a) => contato.id !== a.id);
    // Remove efetivamente do banco
    this.listService.remove(contato.id).subscribe();
  }
  getContato() {
    this.listService.getAll().subscribe((contatos) => (this.contatos = contatos));
  }

}
