import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/produtos.service';
import { IProduto, IProdutoCarrinho } from '../product';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';
import { CarrinhoService } from 'src/app/carrinho.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoID = Number(routeParams.get("id"));
    this.produto = this.produtoService.getOne(produtoID)
  }

  adicionarAoCarrinho(){
    this.notificacaoService.notificar("O iten foi adicionado ao carrinho")
    const produto : IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto)
  }
}
