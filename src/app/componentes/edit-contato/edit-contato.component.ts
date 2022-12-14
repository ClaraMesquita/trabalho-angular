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
  id!: number;

  constructor(private listService: ListService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
                this.getContato();
               }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null],
      empresa: [null],
      telefone: [null],
      email: [null],
    });
  }

  getContato() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe((contato) => (this.contato = contato));
  }
  
  onSubmit() {
    console.log(this.contato);
    console.log(this.contato.id);
    this.id = this.contato.id;
    console.log(this.formulario.value);
    this.contato = this.formulario.value;
    console.log(this.contato);
    console.log(this.contato.id);
    console.log(this.id);
    this.listService.updateContato(this.contato,this.id).subscribe();
    this.router.navigate(['/list']);
  }

}
