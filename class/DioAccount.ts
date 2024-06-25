export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log(`Voce depositou R$${(value).toFixed(2)}`)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.checkBalance(value)){
      this.balance -= value
      console.log(`Voce sacou R$${(value).toFixed(2)}`)
    }
  }

  setBalance = (value: number): void => {
    this.balance += value
  }

  getBalance = (): number => {
    return this.balance
  }

  private checkBalance = (value: number): boolean => {
    if(this.balance >= value){
      return true
    }
    throw new Error('Saldo insuficiente')
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
