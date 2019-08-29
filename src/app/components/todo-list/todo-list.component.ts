import { Component, OnInit, Input } from '@angular/core';
import { Tarefa } from './tarefa-modelo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
@Input() tarefas: Tarefa[];
  tarefaTitulo: string;
  
  idTarefa: number;

  constructor() { }

  
  ngOnInit() {
    this.idTarefa = 4; // começa com id 4 para continuar o que ja está acrescentado na lista como exemplo.
    this.tarefaTitulo ='';
    this.tarefas = [
      {
        id: 1,
        titulo: "Estudar Angular",
        completado: false,
        editado: false
      },

      {
        id: 2,
        titulo: "Pagar os boletos",
        completado: false,
        editado: false
      },

      {
        id: 3,
        titulo: "Levar o  cachorro pra passear",
        completado: false,
        editado: false
      },


    ]
  }

  adicionarTarefas(): string{
    if(this.tarefaTitulo.trim().length === 0){
      return;
    } 
    
    this.tarefas.push({
      id: this.idTarefa,
      titulo: this.tarefaTitulo,
      completado: false,
      editado: false

    })

    this.tarefaTitulo = '';
    this.idTarefa++; //simula o auto increment do back end
  } //<--- fim do metodo que adiciona nome na lista através do botão


  deletarLista(id: number): void{
    this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
  }


  verificaListaVazia(): boolean {
    if(this.tarefaTitulo.length === null){
      return true;
    } 
  }
}

