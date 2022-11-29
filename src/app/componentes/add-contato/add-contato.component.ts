import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Contato } from 'src/app/Contato';
import { ListService } from 'src/app/servicos/list.service';

@Component({
  selector: 'app-add-contato',
  templateUrl: './add-contato.component.html',
  styleUrls: ['./add-contato.component.css']
})
export class AddContatoComponent implements OnInit{
  [x: string]: any;
  formulario!: FormGroup;
  contato!: Contato;

  constructor(private listService: ListService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null],
      empresa: [null],
      telefone: [null],
      email: [null],
    });
  }
  onSubmit() {
    console.log(this.formulario.value);
    this.contato = this.formulario.value;
    console.log(this.contato);
    this.listService.setContato(this.contato).subscribe();
    this.router.navigate(['/list']);
  }

}
