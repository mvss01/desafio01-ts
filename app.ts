import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
console.log(`Seu saldo: R$${peopleAccount.getBalance().toFixed(2)}`);
peopleAccount.withdraw(100)
console.log(`Seu saldo: R$${peopleAccount.getBalance().toFixed(2)}`);

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(10000)
console.log(`Seu saldo: R$${companyAccount.getBalance().toFixed(2)}`);

const specialAccount: SpecialAccount = new SpecialAccount('Cliente', 30)
specialAccount.getLoan(100)
console.log(`Seu saldo: R$${specialAccount.getBalance().toFixed(2)}`);
