import { Injectable } from '@angular/core'
import { data } from './enterData.js'

export type TransactionsType = "income" | "outcome" | "investment" | "loan"


export interface Transaction {
  _id: string
  amount: string | number
  type: TransactionsType
  name: {
    first: string
    last: string
  }
  company: string
  email: string
  phone: string
  address: string
}

export interface Data {
  total: number
  data: Transaction[]
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactions: Data = data

  constructor() { }

  getOneTypeTransactions(transaction: TransactionsType): Transaction[] {
    return this.transactions.data.filter(t => t.type === transaction)
  }

  getAllTransactionsAmount(): number {
    return this.transactions.total
  }

  getAllTypeTransactions(): TransactionsType[] {
    return Array.from(new Set(this.transactions.data.map(i => i.type)))
  }
  
}
