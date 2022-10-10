import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-de-pesquisa',
  templateUrl: './barra-de-pesquisa.component.html',
  styleUrls: ['./barra-de-pesquisa.component.css']
})
export class BarraDePesquisaComponent implements OnInit {
  description= ""

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  pesquisar(){
    if(this.description){
      this.router.navigate(["produtos"], { queryParams: {description: this.description}})
      return
    }

    this.router.navigate(["produtos"])
  }

}
