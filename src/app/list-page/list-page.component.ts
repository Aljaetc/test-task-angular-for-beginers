import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import {TransactionService, TransactionsType, Transaction} from '../shared/transaction.service'

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  tab: TransactionsType

  constructor(
    private transactionService: TransactionService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tab = params['tab'];
    });
  }

  getOneTypeTransactions (transactionsType: TransactionsType): Transaction[] {
    return this.transactionService.getOneTypeTransactions(transactionsType)
  }

  getAllTypeTransactions(): TransactionsType[] {
    return this.transactionService.getAllTypeTransactions()
  }

}
