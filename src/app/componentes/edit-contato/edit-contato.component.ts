import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Contato } from 'src/app/Contato';
import { ListService } from 'src/app/servicos/list.service';

@Component({
  selector: 'app-edit-contato',
  templateUrl: './edit-contato.component.html',
  styleUrls: ['./edit-contato.component.css']
})
export class EditContatoComponent {

  formulario!: FormGroup;
  contato!: Contato;

  constructor(private listService: ListService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
                this.getContato();
               }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: this.contato.nome,
      empresa: this.contato.empresa,
      telefone: this.contato.telefone,
      email: this.contato.email,
    });
  }

  getContato() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe((contato) => (this.contato = contato));
  }
  
  onSubmit() {
    console.log(this.formulario.value);
    this.contato.nome = this.formulario.value;
    this.contato.empresa = this.formulario.value;
    this.contato.telefone = this.formulario.value;
    this.contato.email = this.formulario.value;
    console.log(this.contato);
    this.listService.putContato(this.contato,this.contato.id).subscribe();
    this.router.navigate(['/']);
  }

}
