import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { Curso } from '../curso';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {
  cursos: Array<Curso> = [];
  selectedCurso!: Curso;
  selected: boolean = false;

  constructor(private cursoService: CursoService) { }

  getCursos(){
    this.cursoService.getCursos().subscribe(apiData=>{
      this.cursos = apiData;
    })
  }

  selectCurso(curso: Curso){
    this.selectedCurso = curso;
    this.selected = true;
  }

  ngOnInit() {
    this.getCursos();
  }

}
