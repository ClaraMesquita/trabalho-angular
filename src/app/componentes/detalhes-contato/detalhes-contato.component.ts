import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Contato } from 'src/app/Contato';
import { ListService } from 'src/app/servicos/list.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.css']
})
export class DetalhesContatoComponent implements OnInit {
  contato?: Contato;

  constructor(private listService: ListService,
    private route: ActivatedRoute) {
      this.getContato();
     }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getContato() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe((contato) => (this.contato = contato));
  }

}
