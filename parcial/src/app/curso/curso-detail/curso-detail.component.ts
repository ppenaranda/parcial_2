import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {

  cursoId!: string;
  @Input() curso!: Curso;

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService
  ) { }
  getCurso(){
    this.cursoService.getCurso(this.cursoId).subscribe(apiData=>{
      this.curso = apiData;
    })
  }

  ngOnInit() {
    if(this.curso === undefined){
      this.cursoId = this.route.snapshot.paramMap.get('id')!
      if (this.cursoId) {
        this.getCurso();
      }
    }  
  }

}
