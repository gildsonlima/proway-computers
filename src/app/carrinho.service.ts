import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos/product';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens : IProdutoCarrinho [] = []

  constructor() { }

  obtemCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || '[]')
    return this.itens;
  }
  
  // obtemItensCarrinho(){
  //   const itensCarrinho  = JSON.parse(localStorage.getItem("carrinho") || '')
  //   for (const iten in itensCarrinho) {
  //     iten.quantidade
  //   }
  // }

  adicionarAoCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }

  limparCarrinho(){
    this.itens = []
    localStorage.setItem("carrinho", "")
  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens))

  }
}
