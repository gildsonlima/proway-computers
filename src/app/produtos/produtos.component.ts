import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { IProduto} from './product';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto [] | undefined;

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const produtos = this.produtoService.getAll();
    this.route.queryParamMap.subscribe(params =>{
      const description = params.get("description")?.toLowerCase();

      if(description){
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(description));
        return
      }

      this.produtos = produtos
    })
  }

}
