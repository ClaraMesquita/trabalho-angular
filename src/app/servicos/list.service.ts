import { Injectable } from '@angular/core';
import { Contato } from '../Contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrlContatos = 'http://localhost:3000/contatos'

  constructor(private http: HttpClient) { }

  setContato(contato: Contato) {
    return this.http.post<Contato>(this.apiUrlContatos,contato);    
  }

  updateContato(contato: Contato, id:Number): Observable <Contato> {
    return this.http.patch<Contato>(`${this.apiUrlContatos}/${id}`,contato);    
  }

  getAll():Observable<Contato[]> {
    return this.http.get<Contato[]>(this.apiUrlContatos);
  }

  remove(id: Number) {
    return this.http.delete<Contato>(`${this.apiUrlContatos}/${id}`);
  }
  getItem(id:Number):Observable<Contato> {
    return this.http.get<Contato>(`${this.apiUrlContatos}/${id}`);
  }

}
