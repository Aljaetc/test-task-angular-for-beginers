import { Component, OnInit } from '@angular/core';
import {TransactionService, TransactionsType} from '../shared/transaction.service'

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  getOneTypeTransactionAmount(transactionsType: TransactionsType): number {
    return this.transactionService.getOneTypeTransactions(transactionsType).length
  }

  getAllTransactionsAmount(): number {
    return this.transactionService.getAllTransactionsAmount()
  }

  getAllTypeTransactions(): TransactionsType[] {
    return this.transactionService.getAllTypeTransactions()
  }

}
